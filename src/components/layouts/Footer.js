import React from 'react';

function Footer() {
    const date = new Date();

    return (
        <footer className="footer">
            <span>Deyan Bozhilov <span className="text-white-50">&</span> Lyuben Krastev</span>
            <br/>
            <span className="text-white-50">&copy; Copyright { date.getFullYear() }</span>
        </footer>
    );
}

export default Footer;
