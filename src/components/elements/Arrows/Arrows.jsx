import React from 'react';
import './Arrows.css';

const Arrows = (props) => {

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


    return(
        <div className={'flex'}>
            <button
                style={{visibility: pShow ? '' : 'hidden'}}
                onClick={props.onPrev}>
                Previous
            </button>
            <div />
            <button
                onClick={props.onReset}
            >
                Reset
            </button>
            <div />
            <button
                style={{visibility: nShow ? '' : 'hidden'}}
                onClick={props.onNext}>
                Next
            </button>
        </div>
    )
}

export default Arrows;