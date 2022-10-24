import React from 'react';
import './MCQChoice.css';
import Latex from 'react-latex-next'

const MCQChoice = (props) => {

    return(
        <div className={props.className} onClick={props.onClick}>
            <div className={"choiceID"}>
                {props.cid})
            </div>
            <div className={"choiceText"}>
                <Latex displayMode={true}>
                    {props.cText}
                </Latex>
            </div>
        </div>
    )
}

export default MCQChoice;