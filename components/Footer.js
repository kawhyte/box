import React from 'react'
import styles from '../styles/Home.module.css'

function Footer() {
    return (
        <footer className="footer">
        <a
          href="https://rawg.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/rawg.png" alt="Rawg Logo" className="logo"/>
        </a>
      </footer>
    )
}

export default Footer