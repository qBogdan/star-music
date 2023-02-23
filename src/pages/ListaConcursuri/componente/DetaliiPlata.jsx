import React from "react";

function DetaliiPlata({ concurs }) {
    return (
        <div className="plata">
            <div className="infoBanner">
                <p>Taxă de înscriere :</p>
            </div>

            <div className="taxaWrap">
                <div className="taxa">
                    <div className="taxaCard">
                        <div className="content">
                            <h2>Individual</h2>
                            <div className="pret">
                                <h1>
                                    {concurs.taxa ? concurs.taxa.individual : "-"} {concurs.taxa ? " Lei/pers" : null}
                                </h1>
                                {concurs.taxa ? <h2>categorie</h2> : null}
                            </div>
                        </div>
                    </div>

                    <div className="taxaCard">
                        <div className="content">
                            <h2>Grup / Ansamblu</h2>
                            <div className="pret">
                                <h1>
                                    {concurs.taxa ? concurs.taxa.grup : "-"}
                                    {concurs.taxa ? " Lei/pers" : null}
                                </h1>
                                {concurs.taxa ? <h2>categorie</h2> : null}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="infoBanner">
                <p>Opțiuni de plată</p>
            </div>

            <div className="metodaPlata">
                <img src="media/ui/revolutLogo.svg" alt="" />
                <p>0748.963.385</p>
            </div>

            <div className="metodaPlata">
                <img src="media/ui/westernLogo.svg" alt="" />
                <p>Ghițun Iulian Bogdan</p>
            </div>

            <div className="infoBanner">
                <p>Detalii la 0748.963.385</p>
            </div>
        </div>
    );
}

export default DetaliiPlata;
