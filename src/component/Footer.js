import React from 'react'

const Footer = (props) => {
    const { owner, email } = props
    return (<div >Powered By : {owner} || Contact Me : {email} </div>)
}


export default Footer;