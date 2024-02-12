import { HTMLInputTypeAttribute } from "react";

interface Props {
    id?: string;
    value?: string | number;
    label?: string;
    type?: HTMLInputTypeAttribute;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    additionalMessage?: string;
}

export const Input: React.FC<Props> = ({ id, label, type, onChange, value, additionalMessage }) => (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 8 }}>
        <label htmlFor={id}>{label}</label>
        <input id={id} value={value} type={type} onChange={onChange} />
        {additionalMessage && <div>{additionalMessage}</div>}
    </div>
)