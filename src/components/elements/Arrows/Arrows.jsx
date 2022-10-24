import React from 'react';
import './Arrows.css';
import {useNavigate} from "react-router-dom";

const Arrows = (props) => {
    let navigate = useNavigate();
    let pShow = true;
    let nShow = true;

    if (props.id === '1') {
        pShow = false;
        nShow = true;
    }
    else if (props.id === props.last) {
        pShow = true;
        nShow = false;
    }

    const handlePrevClick = () => {
        navigate(`/q/sat/math/c/${Number(props.id) - 1}`);
        navigate(0);
    }
    const handleNextClick = () => {
        navigate(`/q/sat/math/c/${Number(props.id) + 1}`);
        navigate(0);
    }


    return(
        <div className={'flex'}>
            <button
                style={{visibility: pShow ? '' : 'hidden'}}
                onClick={handlePrevClick}>
                Previous
            </button>
            <div />
            <button
                onClick={props.onClick}
            >
                Reset
            </button>
            <div />
            <button
                style={{visibility: nShow ? '' : 'hidden'}}
                onClick={handleNextClick}>
                Next
            </button>
        </div>
    )
}

export default Arrows;