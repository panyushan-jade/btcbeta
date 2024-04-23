import { useState } from 'react';
const useInscriptions = (wallet) => {
    const { Inscriptions, setInscriptions } = useState([])
    const getInscriptions = async () => {
        if (wallet === 'OKX') {
            try {
                let res = await window.okxwallet.bitcoin.getInscriptions(0, 20);
                console.log(res)
                setInscriptions(res.list)
            } catch (e) {
                console.log(e);
            }
            return
        }
        if (wallet === 'UNISAT') {
            try {
                let res = await window.unisat.getInscriptions(0, 10);
                console.log(res)
                setInscriptions(res.list)
            } catch (e) {
                console.log(e);
            }
        }
    }
    return [Inscriptions, getInscriptions]
}
export default useInscriptions;