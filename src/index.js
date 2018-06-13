import bip39 from 'react-native-bip39'
import '../shim'
import HDKey from 'ethereumjs-wallet-react-native/hdkey'
const generateWallet = async (mnemonic, index = 0) => {
    if (!mnemonic) {
        mnemonic = await bip39.generateMnemonic()
    }
    var masterSeed = bip39.mnemonicToSeed(mnemonic)
    var wallet = HDKey.fromMasterSeed(masterSeed).derivePath("m/44'/60'/0'/0").deriveChild(index).getWallet()
    var currentReceiveAddress = '0x' + wallet.getAddress().toString('hex')
    var privatekey = wallet.getPrivateKey().toString('hex')
    return { currentReceiveAddress, privatekey, mnemonic }
}
export default generateWallet
