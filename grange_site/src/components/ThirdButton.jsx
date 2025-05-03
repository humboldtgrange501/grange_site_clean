import React from 'react';

function ThirdButton({ to, children, newTab = false }) {
  return (
    <a
      href={to}
      target={newTab ? "_blank" : "_self"}
      rel={newTab ? "noopener noreferrer" : undefined}
      className="third-button"
      style={{
        display: 'inline-block',
        padding: '10px 20px',
        backgroundColor: '#2e7ba5',
        color: '#fff',
        textAlign: 'center',
        textDecoration: 'none',
        borderRadius: '5px',
        fontSize: '1rem',
        fontFamily: 'Open Sans',
        transition: 'background-color 0.3s ease',
      }}
      onMouseEnter={(e) => e.target.style.backgroundColor = '#1b5d7f'}
      onMouseLeave={(e) => e.target.style.backgroundColor = '#2e7ba5'}
    >
      {children}
    </a>
  );
}

export default ThirdButton;
