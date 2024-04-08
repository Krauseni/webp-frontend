'use client'
import Link from 'next/link'
import React, { Component } from 'react';

class Footer extends Component {
  state = {}
  render() {
    return <div className="container">
      <footer className="py-3 mt-4">
      <hr  className="mx-5"/>
        <ul className="nav justify-content-center mb-3">
          <li className="nav-item">
            <Link className="nav-link" href="/contact">Kontakt</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/impressum">Impressum</Link>
          </li>
        </ul>
        <hr className="mx-5"/>
      </footer>
    </div>;
  }
}

export default Footer;

