import React from 'react';
import { Card, CardBody, CardFooter, CardHeader, Typography } from '@material-tailwind/react';
import { Meme } from '../core/types';
import Image from 'next/image';

interface MemeCardProps {
    meme: Meme;
}

const MemeCard: React.FC<MemeCardProps> = ({ meme }) => {
    return (
        <Card className="w-full " placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>

            <CardBody placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                <Image width={1000} height={1000} className='h-full w-full' src={meme.url} alt="meme" />
            </CardBody>
            <CardFooter placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                <Typography variant="small" className="mb-2" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    Date de création: {new Date(meme.createdAt).toLocaleString()}
                </Typography>
            </CardFooter>
        </Card>
    );
};

export default MemeCard;