import React, {forwardRef, useImperativeHandle, useRef, useState,} from 'react';
import { addStyles, EditableMathField } from "react-mathquill";
import "./MathInput.css";
import Latex from "react-latex-next";
import MathKeyboard from "../MathKeyboard/MathKeyboard";
import keeb from "./keyboard.json";

//TODO:
//  HAVE MATH KEYS IN A IMPORTED JSON FILE
//  MATH KEYBOARD SWITCH BETWEEN TABS
//  MATH KEYBOARD CSS
//  WORK ON WHICH ITEMS FOR MATH KEYBOARD
//  ANSWER VALIDATION
//  MAKE A FUNCTION TO CALCULATE EQUIVALENT SOLUTIONS

addStyles();

const MathInput = forwardRef((props, ref) => {
    const initialLatex = props.initLatex;
    const [latex, setLatex] = useState(initialLatex);
    const mathRef = useRef(null);
    const [keebCurrTab, setKeebCurrTab] = useState("trig");


    const handleClick = (butCmd) => {
        mathRef.current.typedText(butCmd);
        mathRef.current.keystroke('Enter');
        mathRef.current.focus();
    }

    const handleNum = (numb) => {
        mathRef.current.write(numb);
        mathRef.current.keystroke('Enter');
        mathRef.current.focus();
    }

    const handleTabs = (tabName) => {
        setKeebCurrTab(tabName);
    }
    const handleReset = () => {
        setLatex(props.initLatex);
    }

    useImperativeHandle(ref, () => ({
        handleRes() {
            setLatex(props.initLatex);
        }
    }))
    return (
        <div className={'mathField'} ref={ref}>
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
                handleA1={() => handleTabs("trig")}
                a2={"calc"}
                handleA2={() => handleTabs("calc")}
                a3={"greek"}
                handleA3={() => handleTabs("greek")}
                a4={"greekCaps"}
                handleA4={() => handleTabs("greekCaps")}
                a5={"AC"}
                handleA5={() => handleReset()}
                b1={`${keeb[keebCurrTab].B1.name}`}
                handleB1={() => handleClick(`${keeb[keebCurrTab].B1.mquil}`)}
                b2={`${keeb[keebCurrTab].B2.name}`}
                handleB2={() => handleClick(`${keeb[keebCurrTab].B2.mquil}`)}
                b3={`${keeb[keebCurrTab].B3.name}`}
                handleB3={() => handleClick(`${keeb[keebCurrTab].B3.mquil}`)}
                b4={`${keeb[keebCurrTab].B4.name}`}
                handleB4={() => handleClick(`${keeb[keebCurrTab].B4.mquil}`)}
                b5={`${keeb[keebCurrTab].B5.name}`}
                handleB5={() => handleClick(`${keeb[keebCurrTab].B5.mquil}`)}
                b6={`${keeb[keebCurrTab].B6.name}`}
                handleB6={() => handleClick(`${keeb[keebCurrTab].B6.mquil}`)}
                b7={"7"}
                handleB7={() => handleNum("7")}
                b8={"8"}
                handleB8={() => handleNum("8")}
                b9={"9"}
                handleB9={() => handleNum("9")}
                b10={"divide"}
                handleB10={() => handleNum("\\div")}
                c1={`${keeb[keebCurrTab].C1.name}`}
                handleC1={() => handleClick(`${keeb[keebCurrTab].C1.mquil}`)}
                c2={`${keeb[keebCurrTab].C2.name}`}
                handleC2={() => handleClick(`${keeb[keebCurrTab].C2.mquil}`)}
                c3={`${keeb[keebCurrTab].C3.name}`}
                handleC3={() => handleClick(`${keeb[keebCurrTab].C3.mquil}`)}
                c4={`${keeb[keebCurrTab].C4.name}`}
                handleC4={() => handleClick(`${keeb[keebCurrTab].C4.mquil}`)}
                c5={`${keeb[keebCurrTab].C5.name}`}
                handleC5={() => handleClick(`${keeb[keebCurrTab].C5.mquil}`)}
                c6={`${keeb[keebCurrTab].C6.name}`}
                handleC6={() => handleClick(`${keeb[keebCurrTab].C6.mquil}`)}
                c7={"4"}
                handleC7={() => handleNum("4")}
                c8={"5"}
                handleC8={() => handleNum("5")}
                c9={"6"}
                handleC9={() => handleNum("6")}
                c10={"times"}
                handleC10={() => handleNum("\\times")}
                d1={`${keeb[keebCurrTab].D1.name}`}
                handleD1={() => handleClick(`${keeb[keebCurrTab].D1.mquil}`)}
                d2={`${keeb[keebCurrTab].D2.name}`}
                handleD2={() => handleClick(`${keeb[keebCurrTab].D2.mquil}`)}
                d3={`${keeb[keebCurrTab].D3.name}`}
                handleD3={() => handleClick(`${keeb[keebCurrTab].D3.mquil}`)}
                d4={`${keeb[keebCurrTab].D4.name}`}
                handleD4={() => handleClick(`${keeb[keebCurrTab].D4.mquil}`)}
                d5={`${keeb[keebCurrTab].D5.name}`}
                handleD5={() => handleClick(`${keeb[keebCurrTab].D5.mquil}`)}
                d6={`${keeb[keebCurrTab].D6.name}`}
                handleD6={() => handleClick(`${keeb[keebCurrTab].D6.mquil}`)}
                d7={"1"}
                handleD7={() => handleNum("1")}
                d8={"2"}
                handleD8={() => handleNum("2")}
                d9={"3"}
                handleD9={() => handleNum("3")}
                d10={"minus"}
                handleD10={() => handleNum("-")}
                e1={`${keeb[keebCurrTab].E1.name}`}
                handleE1={() => handleClick(`${keeb[keebCurrTab].E1.mquil}`)}
                e2={`${keeb[keebCurrTab].E2.name}`}
                handleE2={() => handleClick(`${keeb[keebCurrTab].E2.mquil}`)}
                e3={`${keeb[keebCurrTab].E3.name}`}
                handleE3={() => handleClick(`${keeb[keebCurrTab].E3.mquil}`)}
                e4={`${keeb[keebCurrTab].E4.name}`}
                handleE4={() => handleClick(`${keeb[keebCurrTab].E4.mquil}`)}
                e5={`${keeb[keebCurrTab].E5.name}`}
                handleE5={() => handleClick(`${keeb[keebCurrTab].E5.mquil}`)}
                e6={`${keeb[keebCurrTab].E6.name}`}
                handleE6={() => handleClick(`${keeb[keebCurrTab].E6.mquil}`)}
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
    );
});

export default MathInput;