require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom problem brown turtle chaos rare remember huge hidden ensure success sight'; 
let testAccounts = [
"0xa51e8600c8c911ac4577a968c0387f32946f695e177c806b81f1419ff019a99e",
"0x945e2b90d153767b763a09e1dbf58e4d36413b58c571e688a8030b79935ec798",
"0xc127db775f8a224790d972869c43f7dee2d27ee8b1b84114fa45b8be7152e36c",
"0xb097eb0e0d837d6206db486a4b92e334a442e8bddbd64b9d864c5fb5589c6fd6",
"0x593297e7625c6616b4523e9578ab23b022d7af126bc377adc52cb7919b40379b",
"0x5e0621ea915cb95ca538c3ddb8da7e15b9f5ea1349ee485ba5e2efc8006db93b",
"0xae70768524e3129e86663a3b2d6bd32ae1ed7b791f39d0964350208f96d75a8f",
"0x04b14d3a2a3923fbbcb5c9c89d2b93dc6da12bebc91cdaf1cfa9e4d92f9e7643",
"0x6fca9b5ca6fe225771a132f654826fe96dcff6fc50b33c91e881729975823e49",
"0x1c7990f268c5432148d882ba74682f477f77a9c593fcaaee8a145e2dd4b389bf"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

