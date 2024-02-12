import { CSSProperties, PropsWithChildren } from "react";

interface Props {
   fontSize?: number;
   fontStyle?: CSSProperties['fontStyle'];
}  

export const Text: React.FC<PropsWithChildren<Props>> = ({ children, fontSize, fontStyle }) => <span style={{ fontSize, fontStyle }}>{children}</span>