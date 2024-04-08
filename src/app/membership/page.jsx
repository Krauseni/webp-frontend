'use client'
import React, { useEffect } from 'react';
import "./membership.css"

function fillPrices() {

  const formatter = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' });
  fetch('http://localhost:8080/prices').then(data => {
    data.json().then(json => {
      const tableBody = document.getElementById('menu-body');
      json.forEach(membership => {
        const row = document.createElement('tr');

        const classCell = document.createElement('td');
        classCell.textContent = membership.class;
        row.appendChild(classCell);

        const membershipCell = document.createElement('td');
        membershipCell.textContent = membership.membership;
        row.appendChild(membershipCell);

        const priceCell = document.createElement('td');
        priceCell.textContent = formatter.format(membership.price);
        row.appendChild(priceCell);

        tableBody.appendChild(row);
      });
    });
  });
}

function Membership() {
  useEffect(() => {
    fillPrices();
  }, []);

  return (<React.Fragment>
    <div className="padding">
      <h2><div className='redText'>Leider besteht zurzeit ein Aufnahmestopp!!!</div></h2>
      <p className="d-flex justify-content-center">Wir informieren Sie hier, wenn wir wieder Mitglieder aufnehmen.</p>


    </div>
    <hr className="my-2 mx-2" />

    <div className="padding">
    <h3>Mitgliedsbeiträge</h3>
    <br />
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Beitragsklasse</th>
          <th>Mitgliedsform</th>
          <th>Beitragshöhe</th>
        </tr>
      </thead>
      <tbody id="menu-body">
      </tbody>
    </table>
    </div>
  </React.Fragment>
  )
}

export default Membership