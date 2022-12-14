import React, {useRef} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import Question from "../../elements/Question/Question";
import NotFound from "../NotFound/NotFound";
import Arrows from "../../elements/Arrows/Arrows";
import MathInput from "../../elements/MathInput/MathInput";

const Textbook = () => {
    const { source, sec, id } = useParams();
    const max = 100;
    let navigate = useNavigate();
    const mInput = useRef(null);

    if(Number(id) < 1 || Number(id) > Number(max)) {
        return (
            <NotFound />
        )
    }
    const handlePrevClick = () => {
        navigate(`/q/DE/textbook/${source}/${sec}/${Number(id) - 1}`);
        navigate(0);
    }

    const handleNextClick = () => {
        navigate(`/q/DE/textbook/${source}/${sec}/${Number(id) + 1}`);
        navigate(0);
    }

    const handleReset = () => {
        mInput.current.handleRes();
        console.log('reset');
    }

    return(
        <>
            <div>
                <Question
                    id={id}
                    qText={"In Problems $\\underline{1}, \\underline{2}, \\underline{3}, \\underline{4}, \\underline{5}, \\underline{6}, \\underline{7}, \\underline{8}, \\underline{9}, \\underline{10}, \\underline{11}, \\underline{12}, \\underline{13}$, and $\\underline{14}$ find the general solution of the given second-order differential equation."}
                    qQ={"$4 y^{\\prime \\prime}+y^{\\prime}=0$"}
                />
                <MathInput
                    ref={mInput}
                    initLatex={''}
                />
            </div>
            <Arrows
                id={id}
                last={max}
                onReset={handleReset}
                onPrev={handlePrevClick}
                onNext={handleNextClick}
            />
        </>
    );
}

export default Textbook;