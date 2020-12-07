import React from 'react';

function Footer(){
    let date=new Date().getFullYear();
    return <footer><p>
        copright &copy; {date}
    </p></footer>
}

export default  Footer;