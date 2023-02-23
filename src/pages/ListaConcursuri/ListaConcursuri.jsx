import React from "react";
import CardConcurs from "./componente/CardConcurs";
import "./listaConcursuri.css";

function ListaConcursuri() {
    return (
        <div className="listaConcursuri">
            {listaConcursuri.map(concurs => {
                return <CardConcurs key={concurs.titlu} concurs={concurs} />;
            })}
        </div>
    );
}

export default ListaConcursuri;

const listaConcursuri = [
    {
        titlu: "Starurile Federației",
        tip: "concurs",
        taxa: { individual: 150, grup: 30 },
    },
    {
        titlu: "Starurile României",
        tip: "concurs",
        taxa: { individual: 150, grup: 30 },
    },
    {
        titlu: "Talent Star",
        tip: "concurs",
        taxa: { individual: 100, grup: 25 },
    },
    {
        titlu: "Talent Online",
        tip: "concurs",
        taxa: { individual: 100, grup: 25 },
    },

    {
        titlu: "Golden Artist & Silver Artist",
        tip: "concurs",
        taxa: { individual: 100, grup: 25 },
    },
    {
        titlu: "Cerbul de Argint",
        tip: "concurs",
        taxa: { individual: 100, grup: 25 },
    },
    {
        titlu: "Delfinul de Argint",
        tip: "concurs",
        taxa: { individual: 100, grup: 25 },
    },
    {
        titlu: "Starurile Dansului",
        tip: "concurs",
        taxa: { individual: 100, grup: 25 },
    },
    {
        titlu: 'Caravana Națională "10 pentru România"',
        tip: "concurs",
        taxa: { individual: 100, grup: 25 },
    },
    {
        titlu: "Datini, tradiții și obiceiuri Românești",
        tip: "concurs",
        taxa: { individual: 100, grup: 25 },
    },
    {
        titlu: "Regaluri Artistice",
        tip: "regal",
        taxa: { individual: 75, grup: 15 },
    },
    {
        titlu: "Regaluri Aniversare",
        tip: "regal",
        taxa: { individual: 50, grup: 10 },
    },
    {
        titlu: "Angels Voices",
        tip: "concurs",
        taxa: { individual: 150, grup: 30 },
    },
    {
        titlu: 'Caravana Umanitară a Federației "Star Music Romania"',
        tip: "concurs",
        taxa: false,
    },
    {
        titlu: "Festival de Teatru, Poezie și Umor",
        tip: "concurs",
        taxa: { individual: 75, grup: 15 },
    },
    {
        titlu: "Internațional Star A Capella",
        tip: "concurs",
        taxa: { individual: 100, grup: 25 },
    },
    {
        titlu: "Berea de Aur",
        tip: "concurs",
        taxa: false,
    },
    {
        titlu: "Stele Argintii",
        tip: "concurs",
        taxa: false,
    },
    {
        titlu: "International Multitalent",
        tip: "concurs",
        taxa: false,
    },
    {
        titlu: "Multitalent Star",
        tip: "concurs",
        taxa: false,
    },
    {
        titlu: "Liga Națională",
        tip: "concurs",
        taxa: { individual: 100, grup: 25 },
    },
    {
        titlu: "Staruri Regionale",
        tip: "concurs",
        taxa: { individual: 50, grup: 10 },
    },
    {
        titlu: "A Capella",
        tip: "concurs",
        taxa: { individual: 50, grup: 10 },
    },
    {
        titlu: "Aripi de Îngeri",
        tip: "concurs",
        taxa: { individual: 50, grup: 10 },
    },
    {
        titlu: "Saxofonul de Aur",
        tip: "concurs",
        taxa: { individual: 200, grup: 50 },
    },
    {
        titlu: "Desene Artistice",
        tip: "concurs",
        taxa: { individual: 50, grup: 10 },
    },
    {
        titlu: "Magia Artelor",
        tip: "concurs",
        taxa: { individual: 50, grup: 10 },
    },
    {
        titlu: "Voci Cristaline",
        tip: "concurs",
        taxa: { individual: 100, grup: 25 },
    },
    {
        titlu: "Patriot în România",
        tip: "concurs",
        taxa: { individual: 50, grup: 10 },
    },
    {
        titlu: "Olimpiada de Iarnă",
        tip: "concurs",
        taxa: { individual: 50, grup: 10 },
    },
    {
        titlu: "Olimpiada de Vară",
        tip: "concurs",
        taxa: { individual: 50, grup: 10 },
    },
    {
        titlu: "Olimpiada de Toamnă",
        tip: "concurs",
        taxa: { individual: 50, grup: 10 },
    },
    {
        titlu: "Olimpiada de Primăvară",
        tip: "concurs",
        taxa: { individual: 50, grup: 10 },
    },
    {
        titlu: "Olimpiada Tinerilor",
        tip: "concurs",
        taxa: { individual: 50, grup: 10 },
    },
    {
        titlu: "Olimpiada Pensionarilor",
        tip: "concurs",
        taxa: { individual: 50, grup: 10 },
    },
];
