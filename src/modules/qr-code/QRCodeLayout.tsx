import { Outlet } from "react-router"
import '@styles/qrcode.css'
import type { PropsWithChildren } from "react"

const QRCodeLayout = ({children}: PropsWithChildren) => {
    return(
        <main id="qr-code">
            <h1>QR Code</h1>
            {children || <Outlet />}
        </main>
    )
}

export default QRCodeLayout