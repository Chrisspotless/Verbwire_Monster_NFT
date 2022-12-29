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
Clone the project with the code below.

**Step-1**
Have Xampp Installed:
Ensure your Apache and mysql are both Running Respectively.

**Step-2**
Navigate to your Browser.

1. Visit Localhost/phpmyadmin”
2. Create a Database structure called `**monsternft**`.
3. Download [this sql](https://filebin.net/r1ephlmgl09r6n98/monsternft.sql) file.

 import database and proceed


![phpmy admin Database](https://paper-attachments.dropboxusercontent.com/s_B42FAAA4F25C8A6D7C6B09B1ED8CCB9DE1E12FB0611374FA79B74DE5F605B3A8_1672315303012_Screenshot+162.png)


**Step-3**

1. Visit [Verbwire](https://www.verbwire.com/) and create an account.
2. Copy your api key and your contract address Respectively.
3. Replace the .env file with the above information's.

The illustration is shown below.


    VERBWIRE_API_KEY=sk_live_***********************************
    VERBWIRE_CONTRACT=******************************************
    HOST='127.0.0.1'
    PORT='3306'
    DATABASE='monsternft'
    USER='root'
    PASSWORD=''

**Step-4**


    # Make sure you have the above prerequisites installed already!
    git clone https://github.com/Chrisspotless/Verbwire_Monster_NFT.git
    cd monsterNFT # Navigate to the new folder.
    yarn install # Installs all the Dependencies.


1. Run the app Back-End server using Node api/app.js.
2. Run the Front-End start-up using yarn start.


