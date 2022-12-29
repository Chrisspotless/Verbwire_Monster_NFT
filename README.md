# Running MonsterNFT Verbwire Project
Project Demo

![Demo App](./screenshot/zero.gif)

## Technologies Used:
- [Metamask](https://community.metamask.io/t/new-login-for-extension/4445)
- [xampp](https://localhosts.mobi/xampp)
- [Verbwire SDK](https://www.verbwire.com/)
- [React](https://reactjs.org/docs/getting-started.html)
- [Tailwind CSS](https://tailwindcss.com/)
- [Node](https://nodejs.org/en/)
# Running the Demo.

**To run the demo follow these steps:**
Ensure you already have NodeJs installed on your local machine.

**Step-1**
- Have [Xampp](https://www.apachefriends.org/download.html) Installed:
- Run the Xampp program and ensure your apache and mysql services are both Running.

**Step-2**
Navigate to your Browser.

1. Visit [localhost/phpmyadmin](localhost/phpmyadmin/)
2. Create a Database structure called `**monsternft**`.
3. Download [this sql](https://filebin.net/r1ephlmgl09r6n98/monsternft.sql) file.
4. Import it into your `**monsternft**` database.

You should have similar result as the one below.
![phpmy admin Database](https://paper-attachments.dropboxusercontent.com/s_B42FAAA4F25C8A6D7C6B09B1ED8CCB9DE1E12FB0611374FA79B74DE5F605B3A8_1672315303012_Screenshot+162.png)

**Step-3**
Clone this project into your project workspace.

    git clone https://github.com/Chrisspotless/Verbwire_Monster_NFT.git monsterNFT
    cd monsterNFT # Navigate to the new folder.
    yarn install # Installs all the Dependencies.


**Step-4**
Create a `**.env**` file in the root of your project.

1. Visit [Verbwire](https://www.verbwire.com/) and create an account.
2. Create a simple ER721 Smart Contract.
3. Copy Your API Key and the Contract Address to your clipboard.
4. Head to your project `**.env**` file and update with the information below.

Use your API key and replace as follow.


    VERBWIRE_API_KEY=sk_live_***********************************
    VERBWIRE_CONTRACT=0x****************************************
    HOST='127.0.0.1'
    PORT='3306'
    DATABASE='monsternft'
    USER='root'
    PASSWORD=''

**Step-5**
Open Two terminals:
1. On terminal one, run `**node api/app.js**`.
2. On terminal two, run `**yarn start**`.
3. Visit the address on the terminal two on your browser.