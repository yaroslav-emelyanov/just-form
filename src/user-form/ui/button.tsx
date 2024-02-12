import { PropsWithChildren } from "react"

interface Props {
    id?: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
}

export const Button: React.FC<PropsWithChildren<Props>> = ({ id, children, onClick, disabled }) => (
    <button id={id} onClick={onClick} disabled={disabled}>{children}</button>
)