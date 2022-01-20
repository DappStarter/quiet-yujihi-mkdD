require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'imitate prize flock tribe stuff rival predict code hard light army genius'; 
let testAccounts = [
"0xf14563688ad1e7044bedd2a98fffe2857829c8ca34b67f7e34b57f931f37d239",
"0x1b069d8d92ed8243178fb9f75438bcedc0e8f8233c47d5a7d34a0ae7994e41de",
"0x5094c8b2189a5cb199d663fbb18cee9d705b7df96c29b4df9e19f4f4c1d60876",
"0x431666631ccda03a8173fffe71d7a21649f1b66fc1867b555d80303d5892eddd",
"0x07e1d366658e7db02b08fa3aabfceacfa4cb6470573fe023605b67e6e8286467",
"0xa012eed527a7eb2272d8abfa02242a855aeca4cb2ca6064fa0adaf70b24d52a9",
"0x97cbbfa91655d7f8ee31b54172566acd5f2e11a80af41bc3fe11a08b61e8d695",
"0xafd5d1d5ca305de6378c0846a32808fe8c67296ac38a45a981313de550c74b48",
"0x02ef38cc9a1e970c74b31d81bfe6c5b43f4635831e7815984970026ae1296a12",
"0x93d39e320d697be77c2511b40a0013e22206ffe4c6730a88c9177a5535f34b25"
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

