import React from 'react';
import './Question.css';
import Latex from 'react-latex-next'

const Question = (props) => {

    return (
        <div className={"questions"}>
            <div className={"qnum"}>
                <div>
                    {props.id}
                </div>
            </div>
            <div className={"qtext"}>
                <Latex>
                    {props.qText}
                </Latex>
                <div style={{
                    marginBottom: '1em'}}/>
                <Latex>
                    {props.qQ}
                </Latex>
            </div>

        </div>
    )
}

export default Question;