import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./index.css";
import Acasa from "./pages/Acasa/Acasa";
import ListaConcursuri from "./pages/ListaConcursuri/ListaConcursuri";
import Nav from "./pages/Nav/Nav";

function WebApp() {
    return (
        <div className="webApp">
            <header>
                {/* <Link to={"/"}>Acasa</Link>
                <Link to={"/concursuri"}>Concursuri</Link> */}
                <Nav />
            </header>
            <main>
                <Routes>
                    {/* <Route path="/" element={<Acasa />} /> */}
                    <Route path="/" element={<ListaConcursuri />} />
                </Routes>
            </main>
            <footer></footer>
        </div>
    );
}

export default WebApp;
