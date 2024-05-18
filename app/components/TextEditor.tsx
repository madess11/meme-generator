import { Input } from '@material-tailwind/react';
import React, { useState } from 'react';

export interface TextEditorProps {
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void,
    textOptions: TextOptions
}

export interface TextOptions {
    direction?: string;
    text?: string;
    fontFamily?: string;
    fontSize?: number;
    fontStyle?: string;
    fontVariant?: string;
    textDecoration?: string;
    align?: string;
    padding?: number;
    fill?: string;
    x?: number;
    y?: number;
    lineHeight?: number;
    letterSpacing?: number;
    wrap?: string;
    ellipsis?: boolean;

}

const TextEditor: React.FC<TextEditorProps> = ({ onChange, textOptions }) => {
    // const [textOptions, setTextProps] = useState<TextEditorProps>({
    //     direction: 'ltr',
    //     text: 'Votre texte ici',
    //     fontFamily: 'Arial',
    //     fontSize: 16,
    //     fontStyle: 'normal',
    //     fontVariant: 'normal',
    //     textDecoration: 'none',
    //     align: 'left',
    //     verticalAlign: 'baseline',
    //     padding: 0,
    //     lineHeight: 1.5,
    //     letterSpacing: 0,
    //     wrap: 'normal',
    //     ellipsis: false,
    // });


    return (
        <div className="p-6 ">
            <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                    <Input type="text" name="text" label='Texte' value={textOptions.text} onChange={onChange} className="w-full p-2 border rounded" crossOrigin={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />
                </div>
                <div>
                    <Input type="number" name="fontSize" label="Taile de la police (px)" value={textOptions.fontSize} onChange={onChange} className="w-full p-2 border rounded" crossOrigin={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />
                </div>
                <div>
                    <Input type="number" label='Position horizontale (px)' name="x" value={textOptions.x} onChange={onChange} className="w-full p-2 border rounded" crossOrigin={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />
                </div>
                <div>
                    <Input type="number" label='Position verticale (px)' name="y" value={textOptions.y} onChange={onChange} className="w-full p-2 border rounded" crossOrigin={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />
                </div>
                <div>
                    <Input type="number" name="padding" label='Marge interne (px)' value={textOptions.padding} onChange={onChange} className="w-full p-2 border rounded" crossOrigin={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />
                </div>
                <div>
                    <Input type="number" label='Espacement des lettres (px)' name="letterSpacing" value={textOptions.letterSpacing} onChange={onChange} className="w-full p-2 border rounded" crossOrigin={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />
                </div>
                <div>
                    <label className="block mb-2">Style </label>
                    <select title='font style' name="fontStyle" value={textOptions.fontStyle} onChange={onChange} className="w-full p-2 border rounded">
                        <option value="normal">Normale</option>
                        <option value="italic">Italique</option>
                    </select>
                </div>
                <div>
                    <label className="block mb-2">Couleur</label>
                    <select title="couleur" name="fill" value={textOptions.fill} onChange={onChange} className="w-full p-2 border rounded">
                        <option value="red">Rouge</option>
                        <option value="blue">Bleu</option>
                        <option value="green">vert</option>
                        <option value="white">Blanc</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default TextEditor;
