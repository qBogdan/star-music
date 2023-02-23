import React from "react";
import { useState } from "react";
import "./cardConcurs.css";
import DetaliiPlata from "./DetaliiPlata";
import Formular from "./Formular";
function CardConcurs({ concurs }) {
    const [expand, setExpand] = useState(false);
    return (
        <div className="cardConcurs">
            <div
                className="titleWrapper"
                onClick={() => {
                    setExpand(o => !o);
                }}
            >
                <div className="cardTitle">
                    <img className="starIcon" src="media/ui/starIcon.svg" />
                    <h1>{concurs.titlu}</h1>
                </div>

                {!expand ? <div className="inscriete">Înscrie-te !</div> : null}
            </div>

            {expand ? (
                <div className="cardInfo">
                    <div className="infoBanner">
                        <p>Înscrie-te prin telefon la: 0744.234.744</p>
                    </div>
                    <div className="infoBanner">
                        <p>Detalii pentru concursuri </p>
                        <p>NAȚIONALE & INTERNAȚIONALE</p>
                        <p>LIVE & ONLINE</p>
                        <p>COSTEL OPREA - 0744.234.744</p>
                    </div>
                    <div className="cardInfoDivider">
                        <div className="cardInfoSection">
                            <Formular />
                        </div>
                        <div className="cardInfoSection">
                            <DetaliiPlata concurs={concurs} />
                        </div>
                    </div>
                    <div className="regulament">Citește regulamentul concursului</div>
                </div>
            ) : null}
        </div>
    );
}

export default CardConcurs;
