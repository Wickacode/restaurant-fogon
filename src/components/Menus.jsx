import React from "react";

export default function Menus() {
  return (
    <div id="menus-container">
      <h2>Les cartes du moment</h2>
      <div className="cartes">
        <div className="menu-du-jour">
          <p className="menu-type">Menu du jour</p>

          <span>Uniquement le midi du mardi au vendredi</span>
          <br />
          <br />
          <p className="menu-title">Soupe petit pois cébette glacée</p>

          <p>
            Menthe, stracciatella, noix de pecan, pickles de cerise, croûtons,
            roquette
          </p>
          <br />
          <span>ou</span>
          <br />

          <p className="menu-title">Betterave cuite au sel</p>
          <p>Crème de Ricotta citronnée, chips d'ail, coriandre</p>
          <br />
          <hr />
          <br />

          <p className="menu-title">
            Plat du jour <span>14.90€</span>
          </p>
          <p>Découvrir sur place</p>
          <br />
          <p className="menu-title">
            Poisson du jour <span>17.90€</span>
          </p>
          <p>Découvrir sur place</p>
          <br />
          <hr />
          <br />
          <p className="menu-title">Mousse au chocolat</p>
          <p>Glace pistache, réduction de vin et myrtilles</p>
          <br />
          <span>ou</span>
          <br />
          <p className="menu-title">Panna cotta au "lait ribot"</p>
          <p>
            Gel de maracuya, crumble de mais " Arto Gorria " cannelle, sorbet
            coco{" "}
          </p>
          <br />
          <br />
          <br />
          <span>Prix nets en euros, service compris</span>
        </div>

        <div className=" menu-soir-et-weekend">
          <p className="menu-type">Menu du soir & le week end</p>
          <br />
          <br />
          <p className="menu-soir-title">Pour commencer, on grignote, on partage</p>
          <ul>
            <li>Empanaditas au boudin noir sauce Pebre <br /><span>Boudin de chez "Louis Ospital" Hasparren (6 pièces)</span></li> <br />
            <li>Soupe glacée petits pois - cébette <br /><span>Menthe,straciatella,noix de pécan,pickles de cerise,croûtons,roquette</span></li><br />
            <li>Jambon ibérique Cebo del Campo</li> <br />
            <li>Choripan <br /><span>Pain brioché, txistorra de txuleta,salsa verde,pickles de moutarde et oignon</span></li><br />
            <li>Poulpe au barbecue <br /><span>Riz à l'encre de seiche, demi glace au boeuf,citronelle,pilpil,chips d'ail</span></li><br />
            <li>Salmorejo tomate - gingembre <br /><span>Pastèque, oeuf de caille mollet,piment d'Anglet, ventrèche de thon à la flamme</span></li><br />
            <li>Choux rouge rôti <br /><span>Vinaigrette miso,purée d'oignon,kimchi,huile de coriandre,demi-glace d'oignon,cacahouète,coriandre, gingembre</span></li><br />
          </ul>
          <br />
          <hr />
          <p className="menu-soir-title">Poursuivons avec ...</p>
          <ul>
            <li>Ris de veau au barbecue</li>
            <li>Lotte au barbecue</li>
            <li>Pluma ibérique laquée</li>
          </ul>
          <br />
          <hr />
          <br />
          <p className="menu-soir-title">Pour finir en douceur ...</p>
          <ul>
            <li>Mousse au chocolat</li>
            <li>
              Tarta de Queso soufflée <span>(à commander à l'avance)</span>
            </li>
            <li>Panna Cotta au lait Ribo</li>
            <li>Assiette de fromages locaux</li>
          </ul>
          <br />
          <br />
          <br />
          <span>Prix nets en euros, service compris</span>
        </div>
      </div>
    </div>
  );
}
