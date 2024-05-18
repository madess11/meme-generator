"use client"

import Link from "next/link";
import ImageEditor from "../components/ImageEditor";

const Home = () => {
    return (
        <div>
            <h1>Accueil</h1>
            <Link href="/create-meme">
                Créer un Mème
            </Link>
            <Link href="/gallery">
                Galerie
            </Link>

            <div className="my-5">
                <ImageEditor />
            </div>
        </div>
    );
};

export default Home;
