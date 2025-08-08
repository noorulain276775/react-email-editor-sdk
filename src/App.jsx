import React from 'react';
import EmailEditor from './EmailEditor';

function App() {
  return (
    <div style={{
      fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
      backgroundColor: '#f8f9fa',
      minHeight: '100vh',
      padding: '40px',
    }}>
      <div style={{
        maxWidth: '700px',
        margin: '0 auto',
        backgroundColor: '#ffffff',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        borderRadius: '10px',
        padding: '30px',
        textAlign: 'center',
      }}>
        <h1 style={{
          fontSize: '2.5rem',
          color: '#343a40',
          marginBottom: '10px',
        }}>
        Demo Email Editor
        </h1>
        <p style={{ fontSize: '1.1rem', color: '#6c757d', marginBottom: '30px' }}>
          A beautifully crafted custom email template using ReactJS
        </p>
        
        <EmailEditor />
      </div>
    </div>
  );
}

export default App;
