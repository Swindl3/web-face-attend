import React from 'react'

const Footer = (props) => {
    const { owner, email } = props
    return (
        <div className="container-fluid">
            <hr />
            <div className="text-center title text-uppercase">
                <small>
                    <span className="text-danger title">Copyright © 2019</span><span className="text-muted"> มหาวิทยาลัยเทคโนโลยีราชมงคลอีสาน วิทยาเขตขอนแก่น</span>

                </small>
            </div>
        </div>
    )
}


export default Footer;

