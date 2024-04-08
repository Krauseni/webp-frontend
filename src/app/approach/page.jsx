import React from 'react';

function approach() {
  return (
    <React.Fragment>
      <div className="padding">
        <h2>Anfahrt</h2>
        <p>Unsere Anlage liegt in einer schönen Umgebung, nahe der Spree und direkt am Plänterwald. Der S Bahnhof Baumschulenweg 
          ist etwa 5 Minuten Laufweg entfernt, die Buslinien 265, 165 und 170 halten unmittelbar in der Nähe der Anlage.</p>
        <br />
        <h3>Karte</h3>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4861.299666575988!2d13.495327410339423!3d52.46736885102307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84f363a06c765%3A0xc6318e1e39b8b87b!2sTC%20Gr%C3%BCn-Wei%C3%9F%20Baumschulenweg%20e.V.!5e0!3m2!1sde!2sde!4v1712504470730!5m2!1sde!2sde" width="900px" height="675px"></iframe>
        <div className='d-flex justify-content-'>
          <a className="btn btn-primary mx-2" href="https://www.google.de/maps/dir//TC+Grün-Weiß+Baumschulenweg+e.V.,+Tennisanlage+Baumschulenstraße,+Baumschulenstraße+1A,+12437+Berlin/@52.4703782,13.4898484,16z/data=!4m9!4m8!1m0!1m5!1m1!1s0x47a84f363a06c765:0xc6318e1e39b8b87b!2m2!1d13.4937028!2d52.4706656!3e0?entry=ttu" target="_blank" role="button">Routenplanung</a>
          <a className="btn btn-primary" href="https://www.bvg.de/de/verbindungen/verbindungssuche" target="_blank" role="button">BVG-Anfahrtsservice</a>
        </div>
      </div>
    </React.Fragment>
  )
}

export default approach