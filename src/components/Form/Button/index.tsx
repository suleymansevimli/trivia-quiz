import React from "react";

interface Props {
    disabled?: boolean
    onClick: (e:  React.MouseEvent<HTMLButtonElement>) => void
    title: string
}

const Button : React.FC<Props> = ({onClick,disabled,title}) => {
    return (
        <button onClick={onClick} disabled={disabled} children={title}/>
    )
}

export default Button;