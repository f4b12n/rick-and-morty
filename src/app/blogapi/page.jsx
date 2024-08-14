import Link from "next/link";
import Image from "next/image";

export const metadata = {
    title: 'Rick y Morty',
    description: 'Personajes',
}

export default async function Post() {
    const data = await getData();
    return (
        <div className="hover: bg-red-300 hover: font-semibold items-center px-24">
            <h1>Todos los personajes</h1>
            <br />
            <br />
            <ul >
                {data.results.map(({id, name, status, image})=> (
                    <li key={id} className="mb-5 justify-center flex-">
                        <Link href={`/blogapi/${id}`}><h3>{id} - {name}</h3></Link>
                        <Image src={image} width={120} height={80}></Image>
                    </li>) )}
            </ul>

            <div>
                <br />
                <br />

            <Link href="/" >Volver a pagina principal</Link>
        </div>

        </div>

        
    )
}

async function getData() {
    try {
        const res = await fetch('https://rickandmortyapi.com/api/character')
        if(!res.ok){
            throw new Error("Hubo un error en la red");
        }
        const characters = await res.json();
        return characters
    } catch (error) {
        console.error(error);
    }
}