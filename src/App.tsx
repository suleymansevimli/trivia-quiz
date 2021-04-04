import React, {ChangeEvent, useState} from 'react';
import {GlobalStyle} from "./styles/Global.styles";
import Login from "./components/screen/Login";
import Quiz from "./components/screen/Quiz";
import {Difficulty, fetchQuizQuestions} from "./helpers/Api";
import Button from "./components/Form/Button";

const TOTAL_QUESTIONS = 10;


function App() {

    const [name, setName] = useState<string>("")
    const [gameIsOn, setGameIsOn] = useState<boolean>(false)
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
    const [fieldsCheck, setFieldsCheck] = useState<boolean>(true)
    const [quizData, setQuizData] = useState<[]>([])

    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
        setFieldsCheck(!((e.target.value).length > 2))
    }

    const onSubmit = (e: React.MouseEvent<HTMLButtonElement>) => setIsLoggedIn(true);

    const fetchQuizData = React.useCallback(async () => {
        return await fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY);
    }, [])

    const startQuiz = (e: React.MouseEvent<HTMLButtonElement>) => {
        fetchQuizData()
            .then(data => {
                setQuizData(data)
                setGameIsOn(true);
            })
            .catch(e => console.log(e))
    }

    return (
        <div style={{flex: 1}}>
            <GlobalStyle/>
            {!isLoggedIn && <Login fieldsCheck={fieldsCheck} handleInput={handleInput} name={name} onSubmit={onSubmit}/>}
            {isLoggedIn && !gameIsOn && <Button onClick={startQuiz} title={"Start"}/>}
            {gameIsOn && <Quiz nickname={name} questions={quizData}/>}
        </div>
    );
}

export default App;
