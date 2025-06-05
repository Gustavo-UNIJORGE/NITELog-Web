import { useEffect, useState } from "react"
import QRCode from "react-qr-code"

const QRCodeCreate = () => {
    const [token, setToken] = useState<number>()
    
    const handleClick = () => {
        const n = Math.random() * 8
        setToken(n);
    }
    
    useEffect(() => {
        handleClick()
    }, [])

    return(
        <div>
            <div>
                <button 
                    onClick={handleClick}>
                    Gerar Token
                </button>
            </div>
            <QRCode value={token?.toString() || ''}/>
            <span>Escaneie o QR Code acima para marcar presença </span>
        </div>
    )
}

export default QRCodeCreate