import React from "react";
import {LoginContainer} from "../../styles/App.styles";
import Input, {InputTypes} from "../Form/Input";
import Button from "../Form/Button";

interface LoginProps {
    name: string
    onSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void
    handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void
    fieldsCheck: boolean
}


const Login: React.FC<LoginProps> = ({name, onSubmit, handleInput, fieldsCheck}) => {
    return (
        <LoginContainer>
            <h2>Type Your Nick !</h2>
            <Input placeholder={"your nick name"} value={name} handleChange={handleInput} type={InputTypes.TEXT}/>
            <Button onClick={onSubmit} disabled={fieldsCheck} title={"Save And Start"}/>
        </LoginContainer>
    )
}

export default React.memo(Login,function areEqual(
    prevProps,
    nextProps
) {
    return prevProps.name === nextProps.name;
})