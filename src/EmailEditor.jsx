import React from 'react';

function EmailEditor() {
  return (
    <div
      style={{
        maxWidth: '600px',
        margin: '40px auto',
        padding: '30px',
        border: '1px solid #e0e0e0',
        borderRadius: '10px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#ffffff',
      }}
    >
      <h2 style={{ color: '#2c3e50', marginBottom: '20px' }}>📬 Welcome to Our Newsletter!</h2>
      <p style={{ fontSize: '16px', color: '#34495e', lineHeight: '1.6' }}>
        We're excited to have you here. This is a simple yet elegant email template created with
        <strong> React.js</strong> – no external editors, just pure code!
      </p>
      <hr style={{ margin: '20px 0', borderColor: '#eee' }} />
      <p style={{ fontSize: '14px', color: '#7f8c8d' }}>
        Stay tuned for more updates and features. Let’s build beautiful things together! 🚀
      </p>
    </div>
  );
}

export default EmailEditor;
