import { FC, ReactElement } from "react";

// open-closed principle: Las entidades de software deben ser abiertas para que se pueda extender, pero cerradas para que no se pueda modificar.

// type Props = {
//     title: string;
//     type: "default" | "withLinkButton" | "withNormalButton";
//     href?: string;
//     buttonText?: string;
//     onClick?: () => void;
// };

type TitleProps = {
    title: string;
    children: ReactElement;
};

type WithLinkButtonProps = {
    buttonText: string;
    href: string;
    onClick: () => void;
    title: string;
};

type WithNormalButtonProps = {
    buttonText: string;
    onClick: () => void;
    title: string;
};

export const Title: FC<TitleProps> = ({ title, children }) => {
    return (
        <div style={{ display: "flex", justifyContent: "space-between"}}>
            <h1>{title}</h1>
            {children}
        </div>
    )
}

export const WithLinkButton: FC<WithLinkButtonProps> = ({ buttonText, onClick, href, title}) => {
    return (
        <Title title={title}>
            <div onClick={onClick}>
                <a href={href}>{buttonText}</a>
            </div>
        </Title>
    )
}

export const WithNormalButton: FC<WithNormalButtonProps> = ({ title, buttonText, onClick}) => {
    return (
        <Title title={title}>
            <button onClick={onClick}>{buttonText}</button>
        </Title>
    )
}

// const Title: FC<Props> = ({ title, type, href, buttonText, onClick }) => {
//     return (
//         <div style={{ display: "flex", justifyContent: "space-between"}}>
//             <h1>{title}</h1>
//
//             {title === "withLinkButton" && (
//                 <div onClick={onClick}>
//                     <a href={href}>{buttonText}</a>
//                 </div>
//             )}
//
//             {title === "withNormalButton" && (
//                 <button onClick={onClick}>{buttonText}</button>
//             )}
//         </div>
//     )
// }
//
// export default Title;
