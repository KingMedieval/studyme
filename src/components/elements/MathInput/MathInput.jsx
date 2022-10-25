import React from 'react';
import { addStyles, EditableMathField } from "react-mathquill";
import "./MathInput.css";
import Latex from "react-latex-next";
import MathKeyboard from "../MathKeyboard/MathKeyboard";

addStyles();

const MathInput = () => {
    const initialLatex = '';
    const [latex, setLatex] = React.useState(initialLatex);

    return (
        <div className={'mathField'}>
            <EditableMathField
                latex={latex}
                onChange={(mathField) => {
                    setLatex(mathField.latex());
                }}
            />
            <p>{latex}</p>
            <br />
            <Latex >
                {`$$${latex}$$`}
            </Latex>
            <MathKeyboard />
            <button
                onClick={() => {
                    setLatex(`${latex} \\int`)
                }}
            >
                int
            </button>
        </div>
    )
}

export default MathInput;