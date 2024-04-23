const usePublicKey = () => {
    return async(wallet) => {
        if (wallet === 'OKX') {
            try {
                let res = await window.okxwallet.bitcoin.getPublicKey();
                return [null,res]
            } catch (e) {
                return [e,null]
            }
        }
        if (wallet === 'UNISAT') {
            try {
                let res = await window.unisat.getPublicKey();
                return [null,res]
            } catch (e) {
                return [e,null]
            }
        }
    }
}
export default usePublicKey