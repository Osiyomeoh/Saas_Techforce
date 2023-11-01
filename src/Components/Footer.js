import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', padding: '20px 0', backgroundColor: '#f0f4f8', color: '#007BFF' }}>
      
      {/* Social Media Links */}
      <div style={{ display: 'flex', gap: '20px', marginBottom: '10px' }}>
        <a href="https://facebook.com/" style={{ color: '#007BFF' }}>
          <FontAwesomeIcon icon={faFacebookF} size="2x" />
        </a>
        <a href="https://twitter.com/" style={{ color: '#007BFF' }}>
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a href="https://instagram.com/" style={{ color: '#007BFF' }}>
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
      </div>
      
      {/* Privacy Policy Link */}
      <a href="privacy_policy_url" style={{ marginBottom: '10px', color: '#007BFF', textDecoration: 'none' }}>Privacy Policy</a>
      
      {/* Copyright & Made By */}
      <p style={{ fontSize: '0.8rem', color: 'gray' }}>
        &copy; {new Date().getFullYear()} Saas Tech. Made by <strong>Samuel Aleonomoh</strong>.
      </p>
    </footer>
  );
}

export default Footer;
