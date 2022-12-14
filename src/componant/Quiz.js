import { useState } from "react";
import QuestionsData from "../data/QuestionData";

const Quiz = ()=>{
    //console.log(QuestionsData)
    const [current,setCurrent] = useState(0)
    return(
        <div className="quiz">
            <h1>{QuestionsData[current].question}</h1>
            <div>
                <button>{QuestionsData[current.A]}</button>
                <button>{QuestionsData[current.B]}</button>
                <button>{QuestionsData[current.C]}</button>
                <button>{QuestionsData[current.D]}</button>
            </div>
        </div>
    )
}

export default Quiz;