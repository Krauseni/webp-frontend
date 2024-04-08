'use client'
import React from 'react';
import { useEffect } from "react";
import './home.css'

function Home() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (<React.Fragment>
    <div className="header">
      <h1>TC Weiß-Grün e.V.</h1>
    </div>

    <hr className="my-5 mx-4" />
    <div className="padding">
      <h2>Willkommen...</h2>
      <p>...auf unserer Tennis-Website, Ihrem zentralen Anlaufpunkt für alles rund um den Tennis-Sport!
        Tauchen Sie ein in die faszinierende Welt des Tennis, entdecken Sie Tipps und Tricks von Profis,
        bleiben Sie über aktuelle Turniere und Nachrichten auf dem Laufenden und finden Sie die besten
        Ausrüstungen und Trainingsprogramme, um Ihr Spiel auf das nächste Level zu bringen. Egal, ob Sie
        ein erfahrener Spieler oder ein Neuling sind, hier finden Sie alles, was Sie brauchen, um Ihre
        Leidenschaft für Tennis zu entfachen und Ihr Spiel zu verbessern. Lassen Sie uns gemeinsam den
        Schläger schwingen und das Tennisabenteuer beginnen!</p>
    </div>
    <hr className="my-5 mx-4" />

    <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="images/child.jpg" className="d-block w-100" alt="Kind, das Tennis spielt"></img>
          <div className="carousel-caption d-none d-md-block">
            <h3>Jugend</h3>
            <p>Wir bieten Ihnen ein spannendes und lehrreiches Jugendtraining für alle Altersgruppen
              und Fähigkeitsstufen. Mit einem engagierten Team erfahrener Trainer und modernen Trainingsmethoden
              fördern wir die Entwicklung junger Talente auf und neben dem Platz. Unsere Jugendtrainingsprogramme
              umfassen eine Vielzahl von Techniken, Taktiken und mentalen Strategien, die darauf abzielen, das
              Spielverständnis, die Fitness und das Selbstvertrauen unserer jungen Spieler zu verbessern. Wir
              legen Wert auf Spaß und Teamgeist, während wir gleichzeitig eine herausfordernde und unterstützende
              Umgebung schaffen, in der unsere Jugendlichen ihr volles Potenzial entfalten können. Melden Sie sich
              noch heute an und entdecken Sie die spannende Welt des Tennis!</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="/images/racket_at_net.jpg" className="d-block w-100" alt="Schläger am Netz"></img>
          <div className="carousel-caption d-none d-md-block">
            <h3>Mitgliedschaft</h3>
            <p>Unsere Tennisakademie bietet ein spannendes und lehrreiches Jugendtraining für alle Altersgruppen
              und Fähigkeitsstufen. Mit einem engagierten Team erfahrener Trainer und modernen Trainingsmethoden
              fördern wir die Entwicklung junger Talente auf und neben dem Platz. Unsere Jugendtrainingsprogramme
              umfassen eine Vielzahl von Techniken, Taktiken und mentalen Strategien, die darauf abzielen, das
              Spielverständnis, die Fitness und das Selbstvertrauen unserer jungen Spieler zu verbessern. Wir
              legen Wert auf Spaß und Teamgeist, während wir gleichzeitig eine herausfordernde und unterstützende
              Umgebung schaffen, in der unsere Jugendlichen ihr volles Potenzial entfalten können. Melden Sie sich
              noch heute an und entdecken Sie die spannende Welt des Tennis!</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="/images/serve.jpg" className="d-block w-100" alt="Aufschlag"></img>
          <div className="carousel-caption d-none d-md-block">
            <h3>Turniere und Events</h3>
            <p>Seien Sie Teil der Tennis-Action mit unseren aufregenden Events und Turnieren! Von lokalen Wettbewerben
              bis hin zu hochkarätigen Turnieren bieten wir eine Vielzahl von Veranstaltungen für Spieler jeden Niveaus
              und jeden Alters. Egal, ob Sie nach einer Herausforderung suchen oder einfach nur Spaß haben wollen,
              unsere Veranstaltungen bieten eine einladende und wettkampffreundliche Atmosphäre für alle. Nehmen Sie
              teil an spannenden Doppelturnieren, Mix-and-Match-Spielen oder genießen Sie einfach das Zusammensein bei
              unseren geselligen Clubevents. Verpassen Sie nicht die Gelegenheit, neue Freunde zu finden, Ihre Fähigkeiten
              zu verbessern und die Freude am Tennis zu teilen. Schauen Sie sich unser Veranstaltungskalender an und
              seien Sie dabei!</p>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>

    <hr className="my-5 mx-4" />

      <div className="col">
        <div className="padding mx-5">
          <h2>Unsere Trainer</h2>
          <p>Sie sind Anfänger und möchten in den Tennissport einsteigen? Sie haben gerade keinen passenden Spielpartner
            oder möchten am Mannschaftstraining teilnehmen?
            Egal aus welchem Grund auch immer – unsere Trainer stehen Ihnen (Mitgliedern und Gästen) gern mit Rat und Tat zur Seite. 
            Setzen Sie sich mit dem Trainer Ihrer Wahl persönlich in Verbindung. <br /><br /><strong> Rufen Sie einfach an.</strong></p>
        </div>
      </div>

<div className="cards row">
      <div className="col ps-4">
        <div className="card">
          <img src="images/trainer1.jpg" className="card-img-top" alt="Manuel Hofer" />
          <div className="card-body">
            <h5 className="card-title">Manuel Hofer</h5>
            <p className="card-text">Seit 2024 neu dabei</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">C-Lizenz</li>
            <li className="list-group-item">Telefon: +49 987 654321</li>
            <li className="list-group-item">Mail: manuel.hofer@web.de</li>
          </ul>
        </div>
      </div>

      <div className="col">
        <div className="card">
          <img src="images/trainer2.jpg" className="card-img-top" alt="Frank Panthen" />
          <div className="card-body">
            <h5 className="card-title">Frank Panthen</h5>
            <p className="card-text">Spezialisiert auf Kinder- und Jugendtraining</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">A-Lizenz</li>
            <li className="list-group-item ">Telefon: +49 123 456789</li>
            <li className="list-group-item">Mail: frank.panthen@web.de</li>
          </ul>
        </div>
      </div>
    </div>
  </React.Fragment>
  )
}

export default Home