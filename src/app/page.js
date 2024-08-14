import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>API Rick y Morty</h1>
      <Link href="/blogapi">Ir a ver lista de personajes</Link>
    </main>
  );
}

