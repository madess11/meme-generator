"use client";

import { Button, Input, Typography } from '@material-tailwind/react';
import React, { useState } from 'react';
import { Stage, Layer, Image, Text } from 'react-konva';
import useImage from 'use-image';
import TextEditor from './TextEditor';
import { TextOptions } from '../core/types';
import { ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";
import { firebaseDatabase, firebaseStorage } from '../core/config/firebase';
import { set, ref as dbRef } from 'firebase/database';
import { useRouter } from 'next/navigation';

const ImageEditor = () => {
    const [image, setImage] = useState<string | null>(null);
    const [imageURL] = useImage(image || '');
    const [imageNode, setImageNode] = useState<any>(null);
    const router = useRouter();

    const [textOptions, setTextOptions] = useState<TextOptions>({
        direction: 'ltr',
        text: '',
        fontFamily: 'Arial',
        fontSize: 30,
        fontStyle: 'normal',
        fontVariant: 'normal',
        textDecoration: 'none',
        align: 'left',
        padding: 0,
        fill: 'blue',
        x: 50,
        y: 50,
        lineHeight: 1.5,
        letterSpacing: 0,
        wrap: 'normal',
        ellipsis: false,
    });

    const handleTextChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setTextOptions({
            ...textOptions,
            [name]: ['fontSize', 'padding', 'lineHeight', 'letterSpacing'].includes(name) ? parseFloat(value) : value,
        });
    };

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const reader = new FileReader();
            reader.onload = () => setImage(reader.result as string);
            reader.readAsDataURL(event.target.files[0]);
        }
    };

    const handleDownload = () => {
        if (imageNode) {
            const dataURL = imageNode.toDataURL();
            const link = document.createElement('a');
            link.download = 'meme.png';
            link.href = dataURL;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    };

    const handleSave = async () => {
        if (imageNode) {
            const dataURL = imageNode.toDataURL();
            const blob = await (await fetch(dataURL)).blob();
            const imageStorageRef = storageRef(firebaseStorage, `memes/${Date.now()}.png`);

            try {
                await uploadBytes(imageStorageRef, blob);
                const downloadURL = await getDownloadURL(imageStorageRef);

                const imageInfo = {
                    url: downloadURL,
                    createdAt: Date.now(),
                };
                const imageDatabaseRef = dbRef(firebaseDatabase, 'memes/' + Date.now());
                await set(imageDatabaseRef, imageInfo);

                router.push("/");
            } catch (error) {
                console.error("Error uploading file or saving to database:", error);
            }
        }
    };

    return (
        <div className="p-4">
            <Typography as="h1" className="text-3xl my-2 font-bold" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>Générer un mème</Typography>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-2 bg-gray-100 p-2 rounded-lg">
                <div className=" lg:col-span-2 flex flex-col gap-1">
                    <Input type="file" name="image" label="Image" accept="image/*" onChange={handleImageUpload} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} crossOrigin={undefined} />
                    <div className="my-5">
                        {imageURL ? (
                            <>
                                <Stage ref={setImageNode} width={366} height={366} >
                                    <Layer>
                                        <Image image={imageURL} width={366} height={366}  alt="meme" />
                                        <Text {...textOptions} />
                                    </Layer>
                                </Stage>
                                <div className="bg-white p-5 mt-5 rounded-xl flex gap-2">
                                    <Button onClick={handleSave} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>Enregistrer</Button>
                                    <Button onClick={handleDownload} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>Télécharger</Button>
                                </div>
                            </>
                        ) : (
                            <div className="flex justify-center h-full border-2 rounded-lg border-blue-500 border-dotted p-5 w-full">
                                <p className="text-center font-semibold">Votre image s&apos;affichera ici</p>
                            </div>
                        )}
                    </div>
                </div>
                <div className="lg:col-span-3 bg-white p-5 rounded-xl">
                    <Typography className="text-xl font-semibold mb-2" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>Options du texte</Typography>
                    <TextEditor textOptions={textOptions} onChange={handleTextChange} />
                </div>
            </div>
        </div>
    );
};

export default ImageEditor;
