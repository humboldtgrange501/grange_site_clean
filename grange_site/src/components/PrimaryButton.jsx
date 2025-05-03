import React from 'react';

function PrimaryButton({ to, children, newTab }) {
  return (
    <a
      href={to} 
      className="primary-button"
      target={newTab ? "_blank" : "_self"} // Use "_blank" if newTab is true, otherwise "_self"
      rel={newTab ? "noopener noreferrer" : ""}
      style={{
        display: 'inline-block',
        padding: '20px 35px',
        backgroundColor: '#2e7ba5',
        color: '#fff',
        textAlign: 'center',
        textDecoration: 'none',
        borderRadius: '5px',
        fontSize: '1.4rem',
        fontFamily: 'Georgia',
        transition: 'background-color 0.3s ease',
      }}
      onMouseEnter={(e) => e.target.style.backgroundColor = '#1b5d7f'}
      onMouseLeave={(e) => e.target.style.backgroundColor = '#2e7ba5'}
    >
      {children}
    </a>
  );
}

export default PrimaryButton;
