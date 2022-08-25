import Web3 from "web3";
import solnSquareVerifierArtifact from "../../build/contracts/SolnSquareVerifier.json";
const proofData = require('../../../zokrates/proof/proof-token0.json');

const App = {
  web3: null,
  account: null,
  meta: null,

  start: async function() {
    const { web3 } = this;

    try {
      // get contract instance
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = solnSquareVerifierArtifact.networks[networkId];
      this.meta = new web3.eth.Contract(
        solnSquareVerifierArtifact.abi,
        deployedNetwork.address,
      );

      // get accounts
      const accounts = await web3.eth.getAccounts();
      this.account = accounts[0];
    } catch (error) {
      console.error("Could not connect to contract or chain.");
    }
  },

  setStatus: function(message, field1Text, field2Text) {
    const status = document.getElementById("status");
    const field1 = document.getElementById("field1");
    const field2 = document.getElementById("field2");
    
    status.innerHTML = message;
    field1.innerHTML = field1Text;
    field2.innerHTML = field2Text;
  },

  mintNFT: async function() {
    const { mintNFT } = this.meta.methods;
    const id = document.getElementById("tokenId").value;
    
    const txResult = await mintNFT(id, proofData.proof, proofData.inputs).send({from: this.account});
    const tx = await this.web3.eth.getTransactionReceipt(txResult.transactionHash);
    const { logs } = tx;

    const log = logs[0];
    
    const logDecoded = await this.web3.eth.abi.decodeLog([{
        type: 'uint256',
        name: 'tokenID'
    },{
        type: 'address',
        name: 'ownerAddress'
    }], log.data, log.topics);

    App.setStatus("New NFT Minted!", "Owner -> " + logDecoded.ownerAddress, "TokenID -> " + logDecoded.tokenID);
  },

};

window.App = App;

window.addEventListener("load", async function() {
  if (window.ethereum) {
    // use MetaMask's provider
    App.web3 = new Web3(window.ethereum);
    await window.ethereum.enable(); // get permission to access accounts
  } else {
    console.warn("No web3 detected. Falling back to http://127.0.0.1:9545. You should remove this fallback when you deploy live",);
    // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
    App.web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:9545"),);
  }

  App.start();
});