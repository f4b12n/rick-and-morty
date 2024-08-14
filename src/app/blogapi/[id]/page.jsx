import { notFound } from "next/navigation";
import Link from "next/link";

export const metadata = {
    title: 'Perfil del personaje',
    description: 'Personaje',
}

export async function generateStaticParams() {
    const characters = await fetch('https://rickandmortyapi.com/api/character').then ((res) => res.json());

    return characters.results.map((character) => (
        character.id
    ))
}


export default async function Page({params}){
    const data = await getData(params.id)
    if(!data) {
        notFound()
    }
    return (
        <div className="hover: bg-red-300 hover: font-semibold">
            <h1>{data.id} - {data.name}</h1>
            <p>Estado: {data.status}</p>
            <p>Genero: {data.gender}</p>
            <p>Origen: {data.origin.name}</p>
            <img src={data.image} alt={data.name} />
            <br />
            <br />
            <br />
            <Link href="/blogapi">Volver a todos los personajes</Link>
        </div>
    )
}

async function getData(id) {
    try {
        const res = await fetch('https://rickandmortyapi.com/api/character/'+id);
        if(!res.ok){
            throw new Error("Hubo un error en la red");
        }
        const characters = await res.json();
        return characters
    } catch (error) {
        console.error(error);
        return null;
    }
}