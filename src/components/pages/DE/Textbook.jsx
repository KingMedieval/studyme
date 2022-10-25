import React from 'react';
import {useParams} from "react-router-dom";
import Question from "../../elements/Question/Question";
import NotFound from "../NotFound/NotFound";

const Textbook = () => {
    const { source, sec, id } = useParams();
    const max = 100;

    if(Number(id) < 1 || Number(id) > Number(max)) {
        return (
            <NotFound />
        )
    }

    return(
        <>
            <div>
                <Question
                    id={id}
                    qText={"In Problems $\\underline{1}, \\underline{2}, \\underline{3}, \\underline{4}, \\underline{5}, \\underline{6}, \\underline{7}, \\underline{8}, \\underline{9}, \\underline{10}, \\underline{11}, \\underline{12}, \\underline{13}$, and $\\underline{14}$ find the general solution of the given second-order differential equation.$\\\\$ 1) $4 y^{\\prime \\prime}+y^{\\prime}=0$"}
                />
            </div>
        </>
    );
}

export default Textbook;