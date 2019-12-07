import React from 'react';

const Footer = () => {
  const date = new Date();

  return (
    <footer>
      <span className="muted">
        {date.getFullYear()}
      </span>
            Deyan Bozhilov
      <span className="muted">&</span>
            Lyuben Krastev
    </footer>
  );
};

export default Footer;
