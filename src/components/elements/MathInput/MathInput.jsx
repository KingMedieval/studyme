import React, { useRef } from 'react';
import { addStyles, EditableMathField } from "react-mathquill";
import "./MathInput.css";
import Latex from "react-latex-next";
import MathKeyboard from "../MathKeyboard/MathKeyboard";

addStyles();

const MathInput = () => {
    const initialLatex = '';
    const [latex, setLatex] = React.useState(initialLatex);
    const mathRef = useRef(null)

    const handleClick = (butCmd) => {
        mathRef.current.cmd(butCmd);
        mathRef.current.focus();
    }

    const handleNum = (numb) => {
        mathRef.current.write(numb);
        mathRef.current.focus();
    }
    return (
        <div className={'mathField'}>
            <EditableMathField
                latex={latex}
                mathquillDidMount={mf => {mathRef.current = mf}}
                onChange={(mathField) => {
                    setLatex(mathField.latex());
                }}
                config={{
                    supSubsRequireOperand: true
                }}
            />
            <p>{latex}</p>
            <br />
            <Latex >
                {`$$${latex}$$`}
            </Latex>
            <MathKeyboard
                a1={"trig"}
                handleA1={() => handleClick("A1")}
                a2={"calc"}
                handleA2={() => handleClick("A2")}
                a3={"greek"}
                handleA3={() => handleClick("A3")}
                a4={"greekCaps"}
                handleA4={() => handleClick("A4")}
                b1={"sin"}
                handleB1={() => handleClick("\\sin")}
                b2={"cos"}
                handleB2={() => handleClick("\\cos")}
                b3={"tan"}
                handleB3={() => handleClick("\\tan")}
                b4={"arcsin"}
                handleB4={() => handleClick("B4")}
                b5={"arccos"}
                handleB5={() => handleClick("B5")}
                b6={"arctan"}
                handleB6={() => handleClick("B6")}
                b7={"7"}
                handleB7={() => handleNum("7")}
                b8={"8"}
                handleB8={() => handleNum("8")}
                b9={"9"}
                handleB9={() => handleClick("9")}
                b10={"divide"}
                handleB10={() => handleClick("B10")}
                c1={"csc"}
                handleC1={() => handleClick("C1")}
                c2={"sec"}
                handleC2={() => handleClick("C2")}
                c3={"cot"}
                handleC3={() => handleClick("C3")}
                c4={"arccsc"}
                handleC4={() => handleClick("C4")}
                c5={"arcsec"}
                handleC5={() => handleClick("C5")}
                c6={"arccot"}
                handleC6={() => handleClick("C6")}
                c7={"4"}
                handleC7={() => handleNum("4")}
                c8={"5"}
                handleC8={() => handleNum("5")}
                c9={"6"}
                handleC9={() => handleNum("6")}
                c10={"times"}
                handleC10={() => handleClick("C10")}
                d1={"sinh"}
                handleD1={() => handleClick("D1")}
                d2={"cosh"}
                handleD2={() => handleClick("D2")}
                d3={"tanh"}
                handleD3={() => handleClick("D3")}
                d4={"arcsinh"}
                handleD4={() => handleClick("D4")}
                d5={"arccosh"}
                handleD5={() => handleClick("D5")}
                d6={"arctanh"}
                handleD6={() => handleClick("D6")}
                d7={"1"}
                handleD7={() => handleNum("1")}
                d8={"2"}
                handleD8={() => handleNum("2")}
                d9={"3"}
                handleD9={() => handleNum("3")}
                d10={"plus"}
                handleD10={() => handleClick("D10")}
                e1={"csch"}
                handleE1={() => handleClick("E1")}
                e2={"sech"}
                handleE2={() => handleClick("E2")}
                e3={"coth"}
                handleE3={() => handleClick("E3")}
                e4={"arccsch"}
                handleE4={() => handleClick("E4")}
                e5={"arcsech"}
                handleE5={() => handleClick("E5")}
                e6={"arccoth"}
                handleE6={() => handleClick("E6")}
                e7={"0"}
                handleE7={() => handleNum("0")}
                e8={"."}
                handleE8={() => handleNum(".")}
                e9={"equal"}
                handleE9={() => handleClick("E9")}
                e10={"plus"}
                handleE10={() => handleClick("E10")}
                f1={"infinity"}
                handleF1={() => handleClick("F1")}
                f2={"pi"}
                handleF2={() => handleClick("F2")}
                f3={"theta"}
                handleF3={() => handleClick("F3")}
                f4={"e"}
                handleF4={() => handleClick("F4")}
                f5={"logbox"}
                handleF5={() => handleClick("F5")}
                f6={"ln"}
                handleF6={() => handleClick("F6")}
                f7={"sqrt"}
                handleF7={() => handleClick("F7")}
                f8={"nthroot"}
                handleF8={() => handleClick("F8")}
                f9={"super"}
                handleF9={() => handleClick("F9")}
                f10={"sub"}
                handleF10={() => handleClick("F10")}
            />
            <button
                onClick={() => handleClick('\\int')}>
                int
            </button>
        </div>
    )
}

export default MathInput;