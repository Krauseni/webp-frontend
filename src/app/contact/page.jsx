'use client'
import React from 'react';

function contact() {
  const handleSubmit = (event) => {
    const subject = document.getElementById("subjectInput").value;
    const message = document.getElementById("messageInput").value;
    const mailtoLink = "mailto:tcwg@beispiel.com?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(message);
    window.location.href = mailtoLink; // Umleitung zur E-Mail-Aktion
    event.preventDefault(); // Verhindert das Standardformularverhalten
  };
  return (<React.Fragment>
    <div className="padding">
      <h2>Kontakt</h2>
      <p>Haben Sie Fragen oder möchten Sie mehr über unsere Tennisgemeinschaft erfahren? Wir freuen uns, von Ihnen zu hören! 
        Kontaktieren Sie uns gerne per Telefon, E-Mail oder besuchen Sie uns persönlich. Unser freundliches und erfahrenes 
        Team steht Ihnen gerne zur Verfügung, um Ihre Fragen zu beantworten, Informationen über unsere Einrichtungen, Programme 
        und Veranstaltungen bereitzustellen oder Ihnen bei der Mitgliedschaft zu helfen. Wir freuen uns darauf, von Ihnen zu hören 
        und Sie auf Ihrem Tennisweg zu unterstützen! <br/><br/>
        E-Mail:   tcwg@beispiel.com<br/>
        Telefon:  (030) 98 76 54 32<br/>
        Fax:      (030) 19 28 37 46

        </p>
        
      
      </div>
      <hr className="my-2 mx-4" />
      <div className="padding">
      <h3>Kontaktformular</h3>


      <form onSubmit={handleSubmit} method="post" encType="text/plain">
        <div className="mb-3">
          <label htmlFor="subjectInput" className="form-label">Thema</label>
          <input type="text" className="form-control" id="subjectInput" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="messageInput" className="form-label">Nachricht</label>
          <textarea className="form-control" id="messageInput" rows="3"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Senden</button>
      </form>
    </div>
    </React.Fragment>
  )
}

export default contact