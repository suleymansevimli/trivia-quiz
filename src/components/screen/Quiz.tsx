import React, {useState} from "react";
import {QuizContainer} from "../../styles/App.styles";
import {QuestionState} from "../../helpers/Api";


interface Props {
    questions: QuestionState[];
    nickname: string
}

const Quiz: React.FC<Props> = ({nickname, questions}) => {
    const [number, setNumber] = useState<number>(0)
    const [correct, setCorrect] = useState<string>("")
    const [disabled, setDisabled] = useState<boolean>(false);

    const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
        setCorrect(questions[number].correct_answer);
        setDisabled(true)
    }

    const nextQuestion = (e: React.MouseEvent<HTMLButtonElement>) => {
        setNumber(prev => prev + 1);
        setCorrect("");
        setDisabled(false)
    }

    const restart = (e: React.MouseEvent<HTMLButtonElement>) => {
         window.location.reload();
    }

    return (
        <QuizContainer>
            <div className={"header"}>
                <h3>Hi &nbsp;</h3>
                <h3 className={"nick"}> {nickname}</h3>
            </div>

            <div className={"question-card"}>
                <p dangerouslySetInnerHTML={{__html: questions[number].question}}/>
                <div className={"answers"}>
                    {questions[number].answers.map((e, i) => (
                        <button disabled={disabled} className={correct === e ? "default correct" : "default"}
                                onClick={checkAnswer} value={e} key={i}>{e}</button>
                    ))}
                </div>
            </div>

            <div className={"next-questions"}>
                {!(number+1 === questions.length)
                    ? <button onClick={nextQuestion}>Next</button>
                    : <button onClick={restart}>Restart</button>
                }
            </div>
        </QuizContainer>
    )
}

export default Quiz;