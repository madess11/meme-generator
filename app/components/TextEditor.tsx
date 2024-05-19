import { Input } from '@material-tailwind/react';
import React from 'react';
import { TextOptions } from '../core/types';

export interface TextEditorProps {
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void,
    textOptions: TextOptions
}

const TextEditor: React.FC<TextEditorProps> = ({ onChange, textOptions }) => {
    return (
        <div className="p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div>
                    <Input
                        type="text"
                        name="text"
                        label="Texte"
                        value={textOptions.text}
                        onChange={onChange}
                        className="w-full p-2 border rounded" onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} crossOrigin={undefined} />
                </div>
                <div>
                    <Input
                        type="number"
                        name="fontSize"
                        label="Taille de la police (px)"
                        value={textOptions.fontSize}
                        onChange={onChange}
                        className="w-full p-2 border rounded" onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} crossOrigin={undefined} />
                </div>
                <div>
                    <Input
                        type="number"
                        label="Position horizontale (px)"
                        name="x"
                        value={textOptions.x}
                        onChange={onChange}
                        className="w-full p-2 border rounded" onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} crossOrigin={undefined} />
                </div>
                <div>
                    <Input
                        type="number"
                        label="Position verticale (px)"
                        name="y"
                        value={textOptions.y}
                        onChange={onChange}
                        className="w-full p-2 border rounded" onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} crossOrigin={undefined} />
                </div>
                <div>
                    <Input
                        type="number"
                        name="padding"
                        label="Marge interne (px)"
                        value={textOptions.padding}
                        onChange={onChange}
                        className="w-full p-2 border rounded" onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} crossOrigin={undefined} />
                </div>
                <div>
                    <Input
                        type="number"
                        label="Espacement des lettres (px)"
                        name="letterSpacing"
                        value={textOptions.letterSpacing}
                        onChange={onChange}
                        className="w-full p-2 border rounded" onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} crossOrigin={undefined} />
                </div>
                <div>
                    <label className="block mb-2">Style</label>
                    <select
                        title="font style"
                        name="fontStyle"
                        value={textOptions.fontStyle}
                        onChange={onChange}
                        className="w-full p-2 border rounded"
                    >
                        <option value="normal">Normale</option>
                        <option value="italic">Italique</option>
                    </select>
                </div>
                <div>
                    <label className="block mb-2">Couleur</label>
                    <select
                        title="couleur"
                        name="fill"
                        value={textOptions.fill}
                        onChange={onChange}
                        className="w-full p-2 border rounded"
                    >
                        <option value="red">Rouge</option>
                        <option value="blue">Bleu</option>
                        <option value="green">Vert</option>
                        <option value="white">Blanc</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default TextEditor;
