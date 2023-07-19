import React from "react";

export default function Footer() {
  return (
    <div id="footer-container">
      <div className="reseaux">
        <p>Retrouvez-nous sur nos réseaux :</p>
        <a href=""><i class="fa-brands fa-facebook"></i></a>
        <a href=""><i class="fa-brands fa-instagram"></i></a>
      </div>
      <div className="contact">
        <p> 23 Rue Albert Le Barillier - Espace Culturel Quintaou 64600 Anglet</p>
        <p>Réservation : 05 59 01 70 95</p>
        <p>Adresse mail : contact@fogonquintaou.com </p>
      </div>
    </div>
  );
}
