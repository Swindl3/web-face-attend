import React from 'react'
import Header from '../../Header'
import Footer from '../../Footer'

const NotFound = () => {
    return (
        <div>
            <Header />
            <div className="container col-md-8 text-center text-danger">
                <h1 className="mb-5" style={{fontSize:120}}>404</h1>
                <h2 className="mb-4">Page Not Found</h2>
                <p className="mb-5">ขออภัย ไม่พบหน้าที่คุณค้นหา</p>
            </div>
            <Footer  owner="Swindle" email="swindlemaxxx@gmail.com" />
        </div>
    )
}

export default NotFound ;