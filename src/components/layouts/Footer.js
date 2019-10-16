import React from 'react';

function Footer() {
    const date = new Date();

    return (
        <footer style={{ textAlign: 'center', padding: '1rem' }}>
            <span className='muted'>©{ date.getFullYear() }</span> Deyan Bozhilov <span className="muted">&</span> Lyuben Krastev
        </footer>
    );
}

export default Footer;
