import React from 'react'

const Footer = (props) => {
    const { owner, email } = props
    return (
        <div className="container-fluid">
            <hr />
            <div className="text-center title text-uppercase">
                <small>
                    <span className="text-danger title">Powered By : {owner}</span> | <span className="text-muted">Contact Me : {email}</span>
                </small>
            </div>
        </div>
    )
}


export default Footer;