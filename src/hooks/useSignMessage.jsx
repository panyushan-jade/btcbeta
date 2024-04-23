const useSignMessage = (wallet) => {
    const signMessage = async (message) => {
        if (wallet === 'OKX') {
            try {
                let res = await window.okxwallet.bitcoin.signMessage(message, 'ecdsa')
                return [null,res]
            } catch (e) {
                return [e,null]
            }
        }
        if (wallet === 'UNISAT') {
            try {
                let res = await window.unisat.signMessage("abcdefghijk123456789");
                return [null,res]
            } catch (e) {
                return [e,null]
            }
        }
    }
    return signMessage;
}
export default useSignMessage;