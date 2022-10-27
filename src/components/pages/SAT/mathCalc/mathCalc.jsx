import React from 'react';
import {useNavigate, useParams} from "react-router-dom";
import './mathCalc.css';
import Question from "../../../elements/Question/Question";
import MCQChoice from "../../../elements/MCQChoice/MCQChoice";
import Arrows from "../../../elements/Arrows/Arrows";
import NotFound from "../../NotFound/NotFound";

const MathCalc = () => {
    const { id } = useParams();
    const qKey = btoa(encodeURIComponent(`SAT.mathCalc.${id}.choice`));
    const [choice, setChoice] = React.useState(sessionStorage.getItem(qKey));
    const correct = 'b';
    const max = '100';
    let navigate = useNavigate();
    let defaultShow = false;



    const handlePrevClick = () => {
        navigate(`/q/sat/math/c/${Number(id) - 1}`);
        navigate(0);
    }
    const handleNextClick = () => {
        navigate(`/q/sat/math/c/${Number(id) + 1}`);
        navigate(0);
    }
    if (choice) {
        defaultShow = true;
    }

    const [show, setShow] = React.useState(defaultShow);

    const handleClick = (event, cid) => {
        setShow(true);
        setChoice(cid);
        sessionStorage.setItem(qKey, cid)
    }
    const handleReset = (event) => {
        event.preventDefault();
        setShow(false);
        setChoice('');
        sessionStorage.setItem(qKey, '')
    }
    if (choice) {
        if (
            !(  choice.toLowerCase() === 'a' ||
                choice.toLowerCase() === 'b' ||
                choice.toLowerCase() === 'c' ||
                choice.toLowerCase() === 'd' )) {
            return (
                <>
                    <div style={{pointerEvents: 'none'}}>
                        <Question
                            id={id}
                            qText={"Maria is staying at a hotel that charges $\\$99.95$ per night plus tax for a room. A tax of $8\\%$ is applied to the room rate, and an additional onetime untaxed fee of $\\$5.00$ is charged by the hotel. Which of the following represents Maria’s total charge, in dollars, for staying $x$ nights?"}
                            qQ={""}
                        />
                        <div className={"invalidAns"}>
                            Invalid answer choice is stored, press reset button to reset.
                        </div>
                    </div>
                    <Arrows
                    id={id}
                    last={max}
                    onReset={(e) => handleReset(e)}
                    onPrev={handlePrevClick}
                    onNext={handleNextClick}
                    />
                </>
            );}}


    if(Number(id) < 1 || Number(id) > Number(max)) {
        return (
            <NotFound />
        )
    }


    const stylesheet = (cid) => {
        if (!show) return 'choice';

        else {
            if (correct === cid) return 'correct';
            else if (choice === cid) return 'wrong';
            else return 'choice';
        }
    };


    return(
        <>
            <div style={{ pointerEvents: show ? 'none' : '' }}>
                <Question
                    id={id}
                    qText={"Maria is staying at a hotel that charges $\\$99.95$ per night plus tax for a room. A tax of $8\\%$ is applied to the room rate, and an additional onetime untaxed fee of $\\$5.00$ is charged by the hotel. Which of the following represents Maria’s total charge, in dollars, for staying $x$ nights?"}
                    qQ={""}
                />
                <MCQChoice
                    cid={"a"}
                    cText={"$(99.95 + 0.08x) + 5$"}
                    onClick={(e) => handleClick(e, "a")}
                    className={stylesheet('a')}
                />
                <MCQChoice
                    cid={"b"}
                    cText={"$1.08(99.95x) + 5$"}
                    onClick={(e) => handleClick(e, "b")}
                    className={stylesheet('b')}
                />
                <MCQChoice
                    cid={"c"}
                    cText={"$1.08(99.95x + 5)$"}
                    onClick={(e) => handleClick(e, "c")}
                    className={stylesheet('c')}
                />
                <MCQChoice
                    cid={"d"}
                    cText={"$1.08(99.95 + 5)x$"}
                    onClick={(e) => handleClick(e, "d")}
                    className={stylesheet('d')}
                />

            </div>
            <Arrows
                id={id}
                last={max}
                onReset={(e) => handleReset(e)}
                onPrev={handlePrevClick}
                onNext={handleNextClick}
            />
        </>

    );
}

export default MathCalc;