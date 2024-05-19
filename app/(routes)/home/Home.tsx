"use client"

import React, { useEffect, useState } from 'react';
import { Button, Typography } from '@material-tailwind/react';
import Link from 'next/link';
import { fetchMemes } from '../../components/Galery';
import { Meme } from '../../core/types';
import MemeCard from '../../components/MemeCard';

const Home: React.FC = () => {
    const [memes, setMemes] = useState<{ [key: string]: Meme }>({});

    useEffect(() => {
        const getMemes = async () => {
            const memeData = await fetchMemes();
            setMemes(memeData);
        };

        getMemes();
    }, []);

    return (
        <div>
            <div className="container mx-auto p-4">
                <div className="hero text-center my-12">
                    <Typography as="h1" className="text-5xl font-bold mb-4" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                        Bienvenue sur le Générateur de Mèmes
                    </Typography>
                    <Typography className="text-xl mb-8" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                        Créez et partagez vos propres mèmes facilement.
                    </Typography>
                    <div className="flex gap-2  justify-center">
                        <Link href="/create" passHref>
                            <Button size="lg" color="blue" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>Créer un Mème</Button>
                        </Link>
                        <Link href="/gallery" passHref>
                            <Button variant="outlined" size="lg" color="orange" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>Galerie</Button>
                        </Link>
                    </div>
                </div>

                <div className="latest-memes my-12">
                    <Typography as="h2" className="text-3xl font-bold mb-4" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                        Derniers Mèmes
                    </Typography>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {Object.keys(memes).length === 0 ? (
                            <Typography className="text-center w-full" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>Aucun mème disponible</Typography>
                        ) : (
                            Object.entries(memes).slice(0,4).map(([k, meme], index) => (
                                <Link href={`galerie/${k}`} key={k}>
                                    <MemeCard key={index} meme={meme} />
                                </Link>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
