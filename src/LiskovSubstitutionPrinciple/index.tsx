import { ReactElement } from "react";

// Liskov Substitution Principle: Se puede definir como de relación entre objetos donde
// "El objeto de subtipo debe ser sustituible con el objeto de supertipo".

type ButtonType = {
    children: string;
    size: string;
    color?: string;
}

type RedButtonType = {
    children: string;
    size: string;
}

const LiskovSubstitutionPrinciple = () => {
    const Button = ({children, size, color = 'blue'}: ButtonType) => {
        return <button style={{color, fontSize: size === 'xl' ? '32px' : '16px'}}>{children}</button>
    };

    const RedButton = ({children, size}: RedButtonType) => <Button color="red" size={size}>{children}</Button>;


    // Si cambiamos el RedButton por su supertipo Button, no afecta a la aplicación.
    return (
        <div>
            <Button size="xl">
                My button
            </Button>
        </div>
    )
}

export default LiskovSubstitutionPrinciple;
