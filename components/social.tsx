// src/components/Social.tsx
import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Social = () => {
  return (
    <StyledWrapper>
      <div className="card">
        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/ethanmdo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
          <FaLinkedin />
        </a>

        {/* Instagram */}
        <a
          href="https://instagram.com/ethanmdo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
          <FaInstagram />
        </a>

        {/* X (Twitter) */}
        <a
          href="https://twitter.com/your‑handle"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter />
          <FaTwitter />
        </a>

        {/* Email */}
        <a href="ethando@gmail.com">
          <MdEmail />
          <MdEmail />
        </a>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    display: flex;
    gap: 15px;
    padding: 15px;
    background: #000;
    border-radius: 27px;
    box-shadow: 0 0 20px rgba(0,0,0,0.055);
    width: 300px;
    justify-content: space-between;
  }

  .card a {
    position: relative;
    width: 52px;
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    overflow: hidden;
    transition: all 0.4s cubic-bezier(0.15, 0.83, 0.66, 1);
  }

  .card a:hover {
    transform: scale(1.2);
    border-radius: 15px;
  }

  /* per‑icon hover backgrounds */
  .card a:nth-child(1):hover { background-color: #0072b1; }  /* LinkedIn */
  .card a:nth-child(2):hover { background-color: #C13584; }  /* Instagram */
  .card a:nth-child(3):hover { background-color: #1DA1F2; }  /* X/Twitter */
  .card a:nth-child(4):hover { background-color: #EA4335; }  /* Email */

  .card a:active {
    transform: scale(1.1);
    transition-duration: 0.3s;
  }

  /* slip‑effect SVGs */
  .card a svg:first-child {
    position: absolute;
    width: 17px;
    transition: all 0.4s cubic-bezier(0.15, 0.83, 0.66, 1);
    fill: #fff;
  }
  .card a:hover svg:first-child {
    transform: translateY(-40px);
    opacity: 0;
  }

  .card a svg:last-child {
    position: absolute;
    width: 17px;
    transform: translateY(20px);
    opacity: 0;
    transition: all 0.4s cubic-bezier(0.15, 0.83, 0.66, 1);
    fill: #fff;
  }
  .card a:hover svg:last-child {
    transform: translateY(0);
    opacity: 1;
  }
`;

export default Social;
