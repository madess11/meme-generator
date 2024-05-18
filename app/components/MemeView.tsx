"use client"

import React, { useEffect, useState } from 'react';
import { Button, Card, CardBody, CardHeader, Typography } from '@material-tailwind/react';
import { Meme } from '../core/types';
import { firebaseDatabase } from '../core/config/firebase';
import { get, ref } from 'firebase/database';
import Image from 'next/image';
import { FacebookIcon, FacebookShareButton, TwitterIcon, TwitterShareButton, WhatsappIcon, WhatsappShareButton } from 'react-share';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';


const fetchMemeById = async (id: string): Promise<Meme | null> => {
    const memeRef = ref(firebaseDatabase, `memes/${id}`);
    const snapshot = await get(memeRef);

    if (snapshot.exists()) {
        return snapshot.val();
    } else {
        console.log("No meme available");
        return null;
    }
};

const MemeView: React.FC<{ id: string }> = ({ id }) => {
    const [meme, setMeme] = useState<Meme | null>(null);

    const router = useRouter()

    console.log(router);


    useEffect(() => {
        if (id) {
            const getMeme = async () => {
                const memeData = await fetchMemeById(id as string);
                setMeme(memeData);
            };

            getMeme();
        }
    }, [id]);

    const handleDownload = () => {
        if (meme) {
            const link = document.createElement('a');
            link.download = 'meme.png';
            link.href = meme.url;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    };

    if (!meme) {
        return <Typography className="text-center mt-5" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>Chargement...</Typography>;
    }

    return (
        <>
            <Typography placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} className='my-5 text-3xl font-semibold'>Details</Typography>

            <div className="container grid grid-cols-3">


                <div className="col-span-2">
                    <Image src={meme.url} width={500} height={500} alt="meme" />

                    <Typography variant="h5" className="mb-2" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                        {new Date(meme.createdAt).toLocaleString()}
                    </Typography>
                </div>
                <div className=' col-span-1'>
                    <div className='gap-2 flex'>
                        <a download="meme.png" href={meme.url}>
                            <Button  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                Télécharger
                            </Button>
                        </a>

                        <FacebookShareButton url={window.location.href}>
                            <FacebookIcon size={32} round />
                        </FacebookShareButton>
                        <TwitterShareButton url={window.location.href}>
                            <TwitterIcon size={32} round />
                        </TwitterShareButton>
                        <WhatsappShareButton url={window.location.href}>
                            <WhatsappIcon size={32} round />
                        </WhatsappShareButton>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MemeView;
