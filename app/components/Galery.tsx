"use client"

import React, { useEffect, useState } from 'react';
import MemeCard from './MemeCard';
import { Typography } from '@material-tailwind/react';
import { ref, get } from "firebase/database";
import { Meme } from '../core/types';
import { firebaseDatabase } from '../core/config/firebase';
import Link from 'next/link';

export const fetchMemes = async (): Promise<{ [key: string]: Meme }> => {
    const memesRef = ref(firebaseDatabase, 'memes');
    const snapshot = await get(memesRef);

    if (snapshot.exists()) {
        return snapshot.val();
    } else {
        console.log("No memes available");
        return {};
    }
};


const Gallery: React.FC = () => {
    const [memes, setMemes] = useState<{ [key: string]: Meme }>({});

    useEffect(() => {
        const getMemes = async () => {
            const memeData = await fetchMemes();
            setMemes(memeData);
        };

        getMemes();
    }, []);

    return (
        <div className="container mx-auto p-4">
            <Typography as="h1" className="text-3xl my-4 font-bold" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                Galerie de Mèmes
            </Typography>
            <div className="grid grid-cols-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {Object.keys(memes).length === 0 ? (
                    <Typography className="text-center" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>Aucun mème disponible</Typography>
                ) : (
                    Object.entries(memes).map(([k,meme], index) => (
                        <Link href={`galerie/${k}`} key={k}>
                            <MemeCard key={index} meme={meme} />
                        </Link>
                    ))
                )}
            </div>
        </div>
    );
};

export default Gallery;
