import React from "react";
import "./formular.css";

function Formular() {
    return (
        <div className="formular">
            <form action="">
                <input type="text" placeholder="Nume" />
                <input type="text" placeholder="Telefon" />
                <input type="text" placeholder="E-mail" />
                <textarea name="" cols="30" rows="5" placeholder="Adresa completa"></textarea>
                <div className="categorii">Vezi lista completă de categorii</div>
                <textarea name="" cols="30" rows="5" placeholder="Categorii"></textarea>
                <div className="submit">
                    <input type="submit" value="Trimite" />
                </div>
            </form>
        </div>
    );
}

export default Formular;
