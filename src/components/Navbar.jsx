'use client'
import Link from 'next/link'
import React, { Component } from 'react';

class Navbar extends Component {
  state = {}
  render() {
    return <nav className="navbar navbar-expand-lg bg-body-tertiary border-top-0">
      <div className="container-fluid">
        <Link className="navbar-brand" href="/">
          <img src="images/logo.png" alt="TCWG Logo" width="73" height="70" />
          TC Weiß-Grün e.V.
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" href="/about">Über den Verein</Link>
            </li>
            <li>
              <Link className="nav-link" href="/booking">Platz buchen</Link>
            </li>
            <li>
              <Link className="nav-link" href="/membership">Mitgliedschaft</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/approach">Anfahrt</Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>;
  }
}

export default Navbar;