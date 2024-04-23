import { useState } from "react";
const useConnect = () => {
    const [Address, setAddress] = useState("");
    const [currentWallet, setCurrentWallet] = useState("")
    const connected = async (wallet,callback) => {
        if (wallet === 'OKX') {
            const ua = navigator.userAgent;
            const isIOS = /iphone|ipad|ipod|ios/i.test(ua);
            const isAndroid = /android|XiaoMi|MiuiBrowser/i.test(ua);
            const isMobile = isIOS || isAndroid;
            const isOKApp = /OKApp/i.test(ua);
            if (isMobile && !isOKApp) {
                return window.open('okx://wallet/dapp/details?dappUrl=https://www.lont.games')
            }
            if (typeof window.okxwallet !== 'undefined') {
                try {
                    const result = await window.okxwallet.bitcoin.connect()
                    console.log(result)
                    if (result.address) {
                        setAddress(result.address)
                        setCurrentWallet(wallet)
                        callback && callback(result.address)
                        // window.okxwallet.bitcoin.on('accountChanged', (addressInfo) => {
                        //     setAddress(addressInfo.address)
                        // })
                    }
                } catch (error) {
                    console.log(error)
                }

            }
        }
        if(wallet === 'UNISAT' && typeof window.unisat !== 'undefined'){
            try {
                const accounts  = await window.unisat.requestAccounts();
                // let UnisatPubKey = await window.unisat.getPublicKey()
                if(accounts[0]){
                    setAddress(accounts[0])
                    callback && callback(accounts[0])
                    setCurrentWallet(wallet)
                }
            } catch (error) {
                console.log(error)
            }
        }
    }
    return [Address, currentWallet, connected]
}
export default useConnect;