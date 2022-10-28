import React, { useRef } from 'react';
import { addStyles, EditableMathField } from "react-mathquill";
import "./MathInput.css";
import Latex from "react-latex-next";
import MathKeyboard from "../MathKeyboard/MathKeyboard";

//TO DO
//HAVE MATH KEYS IN A IMPORTED JSON FILE
//MATH KEYBOARD SWITCH BETWEEN TABS
//MATH KEYBOARD CSS
//WORK ON WHICH ITEMS FOR MATH KEYBOARD
//ANSWER VALIDATION
//MAKE A FUNCTION TO CALCULATE EQUIVALENT SOLUTIONS

addStyles();

const MathInput = () => {
    const initialLatex = '';
    const [latex, setLatex] = React.useState(initialLatex);
    const mathRef = useRef(null)

    const handleClick = (butCmd) => {
        mathRef.current.typedText(butCmd);
        mathRef.current.keystroke('Enter');
        mathRef.current.focus();
    }

    const handleNum = (numb) => {
        mathRef.current.write(numb).keystroke('Enter');
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
                handleB1={() => handleClick("\\sin(")}
                b2={"cos"}
                handleB2={() => handleClick("\\cos(")}
                b3={"tan"}
                handleB3={() => handleClick("\\tan(")}
                b4={"arcsin"}
                handleB4={() => handleClick("\\arcsin(")}
                b5={"arccos"}
                handleB5={() => handleClick("\\arccos(")}
                b6={"arctan"}
                handleB6={() => handleClick("\\arctan(")}
                b7={"7"}
                handleB7={() => handleNum("7")}
                b8={"8"}
                handleB8={() => handleNum("8")}
                b9={"9"}
                handleB9={() => handleNum("9")}
                b10={"divide"}
                handleB10={() => handleNum("\\div")}
                c1={"csc"}
                handleC1={() => handleClick("\\csc(")}
                c2={"sec"}
                handleC2={() => handleClick("\\sec(")}
                c3={"cot"}
                handleC3={() => handleClick("\\cot(")}
                c4={"arccsc"}
                handleC4={() => handleClick("\\arccsc(")}
                c5={"arcsec"}
                handleC5={() => handleClick("\\arcsec(")}
                c6={"arccot"}
                handleC6={() => handleClick("\\arccot(")}
                c7={"4"}
                handleC7={() => handleNum("4")}
                c8={"5"}
                handleC8={() => handleNum("5")}
                c9={"6"}
                handleC9={() => handleNum("6")}
                c10={"times"}
                handleC10={() => handleNum("\\times")}
                d1={"sinh"}
                handleD1={() => handleClick("\\sinh(")}
                d2={"cosh"}
                handleD2={() => handleClick("\\cosh(")}
                d3={"tanh"}
                handleD3={() => handleClick("\\tanh(")}
                d4={"arcsinh"}
                handleD4={() => handleClick("\\arcsinh(")}
                d5={"arccosh"}
                handleD5={() => handleClick("\\arccosh(")}
                d6={"arctanh"}
                handleD6={() => handleClick("\\arctanh(")}
                d7={"1"}
                handleD7={() => handleNum("1")}
                d8={"2"}
                handleD8={() => handleNum("2")}
                d9={"3"}
                handleD9={() => handleNum("3")}
                d10={"minus"}
                handleD10={() => handleNum("-")}
                e1={"csch"}
                handleE1={() => handleClick("\\csch(")}
                e2={"sech"}
                handleE2={() => handleClick("\\sech(")}
                e3={"coth"}
                handleE3={() => handleClick("\\coth(")}
                e4={"arccsch"}
                handleE4={() => handleClick("\\arccsch(")}
                e5={"arcsech"}
                handleE5={() => handleClick("\\arcsech(")}
                e6={"arccoth"}
                handleE6={() => handleClick("\\arccoth(")}
                e7={"0"}
                handleE7={() => handleNum("0")}
                e8={"."}
                handleE8={() => handleNum(".")}
                e9={"equal"}
                handleE9={() => handleNum("=")}
                e10={"plus"}
                handleE10={() => handleClick("+")}
                f1={"infinity"}
                handleF1={() => handleNum("\\infty")}
                f2={"pi"}
                handleF2={() => handleNum("\\pi")}
                f3={"theta"}
                handleF3={() => handleNum("\\theta")}
                f4={"e"}
                handleF4={() => handleNum("e")}
                f5={"logbox"}
                handleF5={() => handleClick("\\log_")}
                f6={"ln"}
                handleF6={() => handleClick("\\ln(")}
                f7={"sqrt"}
                handleF7={() => handleClick("\\sqrt")}
                f8={"nthroot"}
                handleF8={() => handleClick("\\nthroot")}
                f9={"super"}
                handleF9={() => handleClick("^")}
                f10={"sub"}
                handleF10={() => handleClick("_")}
            />
            <button
                onClick={() => handleClick('\\int')}>
                int
            </button>
        </div>
    )
}

export default MathInput;