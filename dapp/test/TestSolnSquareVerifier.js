var SolnSquareVerifier = artifacts.require('SolnSquareVerifier');
var SquareVerifier = artifacts.require('SquareVerifier');
const proofData = require('../../zokrates/proof/proof-token0.json');

contract('TestSolnSquareVerifier', accounts => {

    const account_one = accounts[0];

    describe('match SolnSquareVerifier spec', function () {
        beforeEach(async function () { 
            this.verifier = await SquareVerifier.deployed();
            this.contract = await SolnSquareVerifier.deployed(this.verifier);
        })
       
        it('a new solution can be added for contract', async function () {
            const tx = await this.contract.addSolution(123, account_one);
            const { logs } = tx;
            assert.ok(Array.isArray(logs));
            assert.equal(logs.length, 1);

            const log = logs[0];
            assert.equal(log.event, 'SolutionAdded');
            assert.equal(log.args.index.toString(), '123');
            assert.equal(log.args.owner , account_one);
        })

        it('an ERC721 token can be minted for contract', async function () {
            const tx = await this.contract.mintNFT(456, proofData.proof, proofData.inputs);
            const { logs } = tx;
            assert.ok(Array.isArray(logs));
            assert.equal(logs.length, 2);

            const log = logs[0];
            assert.equal(log.event, 'SolutionAdded');
            assert.equal(log.args.index.toString(), '456');
            assert.equal(log.args.owner , account_one);

        })

    });
})