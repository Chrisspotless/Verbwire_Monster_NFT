require('dotenv').config()
const cors = require('cors')
const express = require('express')
const { generateMeta } = require('./metadata')
const fileupload = require('express-fileupload')
const sdk = require('api')('@verbwire/v1.0#u23cs1ilc4z0uir')
const { Sequelize, DataTypes } = require('sequelize')

const app = express()

app.use(cors())
app.use(
  fileupload({
    useTempFiles: true,
    tempFileDir: '/tmp/',
  }),
)
app.use(express.json())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

const sequelize = new Sequelize(process.env.DATABASE, process.env.USER, process.env.PASSWORD, {
  host: process.env.HOST,
  port: process.env.PORT,
  dialect: 'mysql',
})

const Mint = sequelize.define(
  'mints',
  {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    image: DataTypes.STRING,
    price: DataTypes.FLOAT,
  },
  {
    timestamps: false,
  },
)

app.post('/process', async (req, res) => {
  try {
    const name = req.body.name
    const price = req.body.price
    const recipientAddress = req.body.recipientAddress
    const description = req.body.description
    const image = req.files.image

    if (!name || !description || !price || !image || !recipientAddress) {
      return res
        .status(400)
        .send(
          'name, description, recipientAddress, and price must not be empty',
        )
    }

    let ipfs_img_url
    await sdk.auth(process.env.VERBWIRE_API_KEY)
    await sdk
      .postNftStoreFile(
        { filePath: image.tempFilePath },
        { accept: 'application/json' },
      )
      .then(async ({ data }) => {
        ipfs_img_url = data.ipfs_storage.ipfs_url
        await sdk
          .postNftMintMintfrommetadata(
            {
              chain: 'goerli',
              imageUrl: data.ipfs_storage.ipfs_url,
              name,
              description,
              recipientAddress,
              contractAddress: process.env.VERBWIRE_CONTRACT,
              data: JSON.stringify(generateMeta()),
            },
            { accept: 'application/json' },
          )
          .then(async ({ data }) => {
            console.log(data)
            await Mint.create({
              name,
              description,
              image: ipfs_img_url,
              price,
            })
            return res.status(201).json({ ...data })
          })
          .catch((err) => console.error(err))
      })
      .catch((err) => console.error(err))
  } catch (error) {
    console.log(error)
    return res.status(400).json({ error })
  }
})

app.get('/mints', async (req, res) => {
  const mints = await Mint.findAll()
  return res.status(201).json({ data: mints })
})

app.listen(9000, async () => {
  console.log('Listen on the port 9000...')
})
