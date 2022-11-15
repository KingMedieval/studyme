import React from 'react';
import {useNavigate, useParams} from "react-router-dom";
import './mathCalc.css';
import Question from "../../../elements/Question/Question";
import MCQChoice from "../../../elements/MCQChoice/MCQChoice";
import Arrows from "../../../elements/Arrows/Arrows";
import NotFound from "../../NotFound/NotFound";
import { shuffleArray } from "../../../functions/shuffleArray";
import Graph from "../../../elements/Graph/Graph";

//TODO:
//  graph integration
//  solution integration
//  maybe stats integration

const MathCalc = () => {
    let navigate = useNavigate();
    let defaultShow = false;
    const { id } = useParams();
    const qKey = btoa(encodeURIComponent(`SAT.mathCalc.${id}.choice`));
    const [choice, setChoice] = React.useState(sessionStorage.getItem(qKey));
    const [max, setMax] = React.useState(100);
    const [response, setResponse] = React.useState(null);
    const [correct, setCorrect] = React.useState('');
    const [mcq, setMcq] = React.useState([]);
    const seed = sessionStorage.getItem(btoa('seed')) ?
        sessionStorage.getItem(btoa('seed')) :
        sessionStorage.setItem(
            btoa('seed'),
            Math.floor(Math.random() * 100000000)
                .toString(16)
                .toUpperCase());

    React.useEffect(() => {
         fetch(`http://localhost:6900/satmath/?qid=${id}&seed=${seed}`,
             {method: "GET"})
             .then((res) => res.json())
             .then((data) => {
                 setResponse(data);
                 setCorrect(data.correct);
                 setMax(data.max);
                 setMcq(shuffleArray([
                     ['a', data.mc.a],
                     ['b', data.mc.b],
                     ['c', data.mc.c],
                     ['d', data.mc.d]], seed, id));
             })
             .catch((e) => console.log(e));
         console.log('effect');
    },[]);

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
    if (!(response)) {
        return (
            <>
            </>
        )
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
                            qText={response ? response.base : ''}
                            qQ={""}
                        />
                        <Graph />
                        <div className={"invalidAns"}>
                            Invalid answer choice is stored,
                            press reset button to reset.
                        </div>
                    </div>
                    <Arrows
                    id={id}
                    last={max.toString()}
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
            <div>
                <Question
                    id={id}
                    qText={response.base}
                    qQ={response.subBase}
                />
                <Graph />
            </div>
            <div style={{ pointerEvents: show ? 'none' : '' }}>
                {mcq.map((element, index) => {
                    return(
                        <div key={index}>
                            <MCQChoice
                                cid={String.fromCharCode(index+97)}
                                cText={element[1]}
                                onClick={(e) => handleClick(e, element[0])}
                                className={stylesheet(element[0])} />
                        </div>
                    );
                })}
            </div>
            <Arrows
                id={id}
                last={max.toString()}
                onReset={(e) => handleReset(e)}
                onPrev={handlePrevClick}
                onNext={handleNextClick}
            />
        </>

    );
}

export default MathCalc;