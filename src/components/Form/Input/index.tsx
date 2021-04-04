import React, {ChangeEvent} from "react";

export enum InputTypes {
    TEXT = 'text',
    PASSWORD = 'password',
    EMAIL = 'email'
}


interface Props {
    value: string;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type: InputTypes,
    placeholder: string
}

const Input: React.FC<Props> = ({type = InputTypes.TEXT,handleChange, value,placeholder}) => {
    return (
        <input placeholder={placeholder} className={"form-control"} type={type} onChange={handleChange} value={value}/>
    )
}

export default Input;