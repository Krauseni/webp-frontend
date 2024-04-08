'use client'
import React, { useEffect } from 'react';
import "./booking.css"

function fillTableWithData(data) {
  const tableBody = document.getElementById('tableBody');
  const formatter = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' });

  fetch('http://localhost:8080/booking').then(data => {
    data.json().then(json => {
      json.forEach(item => {
        const row = document.createElement('tr');

        const courtCell = document.createElement('td');
        courtCell.textContent = item.court;
        row.appendChild(courtCell);

        const priceCell = document.createElement('td');
        priceCell.textContent = formatter.format(item.price);
        row.appendChild(priceCell);

        const cell10to12 = document.createElement('td');
        cell10to12.textContent = item['10to12'] ? 'nicht verfügbar' : 'verfügbar';
        if (!item['10to12']) {
          cell10to12.classList.add('green');
        } else {
          cell10to12.classList.add('red');
        }
        row.appendChild(cell10to12);

        const cell12to14 = document.createElement('td');
        cell12to14.textContent = item['12to14'] ? 'nicht verfügbar' : 'verfügbar';
        if (!item['12to14']) {
          cell12to14.classList.add('green');
        } else {
          cell12to14.classList.add('red');
        }
        row.appendChild(cell12to14);

        const cell14to16 = document.createElement('td');
        cell14to16.textContent = item['14to16'] ? 'nicht verfügbar' : 'verfügbar';
        if (!item['14to16']) {
          cell14to16.classList.add('green');
        } else {
          cell14to16.classList.add('red');
        }
        row.appendChild(cell14to16);

        tableBody.appendChild(row);
      });
    });
  });
}

function Booking() {
  useEffect(() => {
    fillTableWithData();
  }, []);

  return (<React.Fragment>
    <div className="padding">
      <h2>Platzbuchung</h2>
      <h3><br />Allgemeine Platzordnung</h3>
      <ul>
        <li>Spielberechtigt sind alle Mitglieder, die Ihren Jahresbeitrag entrichtet haben</li>
        <li>Die Tennisplätze dürfen nur in Tenniskleidung und mit Tennisschuhen betreten werden.</li>
        <li>Alle Räume (Restaurant, Flure,Toiletten, Dusch- und Umkleideräume) dürfen nur mit gereinigten Tennisschuhen betreten werden, die keine Sand- und/oder Schmutzreste hinterlassen.</li>
        <li>Für Garderobe und Wertgegenstände wird auf der ganzen Anlage vom Verein keine Haftung übernommen.</li>
        <li>Technische Mängel der Tennisanlage sind unverzüglich dem Platzwart oder dem Geschäftsführer zu melden.</li>
        <li>Der Vorstand und der Geschäftsführer haben das Recht, bei Verstößen gegen diese Platzordnung, Mitglieder und Gäste zum Verlassen der Tennisanlage aufzufordern.Im Weiteren kann dies mit Spielverbot geahndet werden.</li>
        <li>Für vorsätzliche und fahrlässige Beschädigungen der Anlage haftet der Verursacher. Im Wiederholungsfall erfolgt Anlagenverbot.</li>
        <li>Abfall gehört in die dafür vorgesehenen Behälter. Geschirr von der Gastronomie muss wieder zurück gebracht werden.</li>
        <li>Alle Mitglieder und Gäste sind aufgefordert sich so zu verhalten, dass sich die Clubgemeinschaft nicht gestört fühlt.</li>
        <li>Das Fahrradfahren auf der Anlage ist nicht gestattet. Die Räder sind im Fahrradständer am Eingang abzustellen.</li>
      </ul>
    </div>
    <hr className="my-2 mx-2" />

    <div className="padding">
      <h3>Gastspielregelung</h3>
      <ul>
        <li>Gastspieler sind Tennisspieler, die kein Mitglied unseres Vereins sind. Sie sind spielberechtigt, wenn sie von einem
          aktiven Mitglied des Vereins eingeladen werden und mit diesem spielen. Familienangehörige und Lebensgefährten von aktiven
          Mitgliedern, die selber keine Vereinsmitglieder sind, aber mit diesen Tennis spielen, gelten ausdrücklich ebenfalls als
          Gastspieler.</li>
        <li>Gastspieler sind vor Spielbeginn durch das aktive Mitglied in die Gastspielliste im Vereinsgebäude mit Datum und Namen
          einzutragen. Der Name des aktiven Mitgliedes ist ebenfalls einzutragen. <strong>Das Vereinsmitglied ist also für die
            Eintragung in die Gästeliste verantwortlich</strong>. Geschieht das nicht, ist der Gast nicht spielberechtigt und kann
          von anderen Vereinsmitgliedern aufgefordert werden, die Anlage zu verlassen.</li>
        <li>Das aktive Mitglied darf zur gleichen Zeit entweder mit einem Gastspieler Einzel oder mit max. 3 Gastspielern Doppelspielen.</li>
        <li>Für das Gastspiel ist von jedem Gastspieler eine Gebühr zu entrichten.</li>
        <li>Die Gastgebühr beträgt vor 15:00 Uhr 8,00 € pro Stunde und Platz, nach 15:00 Uhr 10,00 € pro Stunde und Platz.</li>
        <li><strong>Für die Zahlung der Gastspielgebühr ist das Vereinsmitglied verantwortlich</strong>. Die Gastspielgebühr ist
          durch das Vereinsmitglied ohne besondere Aufforderung beim Platzwart oder beim Vereinstrainer, der sich auf der Anlage
          befindet oder beim Geschäftsführer bezahlen. Ist keiner der vorgenannten Personen anwesend, kann die zu entrichtende Gebühr
          (Briefumschläge befinden sich in der Gästeliste) in den Briefkasten im Vereinsgebäude eingeworfen werden. Bitte schreibt
          auf den Umschlag das Datum, den Namen und den Namen des Gastspielers bzw. die Namen der Gastspieler.</li>
        <li>Die Platzordnung gilt uneingeschränkt auch für Gastspieler.</li>
        <li>Schwarzspiel wird mit einer Strafgebühr von 50,00 € geahndet.<br /><br /></li>
      </ul>
    </div>
    <hr className="my-2 mx-2" />
    <div className="padding">
      <h3>Platzbuchung</h3>
      <p>Hier erhalten Sie einen allgemeinen Überblick über unsere Platzordnung und die Möglichkeiten, Plätze zu buchen. Plätze 
        können für eine Stunde gebucht werden. Außerdem ist es möglich, ein Platz-Abonnement für eine Saison zu erwerben. Beide 
        Buchungsoptionen erfolgen über <a className='link' href="https://www.eversports.de/widget/w/am2e0x">eversports</a>. Unten
        sehen Sie eine Übersicht über die verfügbaren Abonnements für die Sommersaison 2024.</p>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Tennisplatz</th>
            <th>Preis</th>
            <th>10-12 Uhr</th>
            <th>12-14 Uhr</th>
            <th>14-16 Uhr</th>
          </tr>
        </thead>
        <tbody id="tableBody">
        </tbody>
      </table>
    </div>
  </React.Fragment>
  )
}

export default Booking