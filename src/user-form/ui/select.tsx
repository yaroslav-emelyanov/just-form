interface Option {
    label: string;
    value: string;
}


interface Props {
    label?: string;
    name?: string;
    value?: string;
    additionalMessage?: string;
    options?: Option[]
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void; 
}

export const Select: React.FC<Props> = ({ label, value, name, options, onChange, additionalMessage }) => (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 8 }}>
        <label htmlFor={name}>{label}</label>
        <select id={name} value={value} onChange={onChange} style={{ height: 21 }}>
            <option value="" disabled></option>
          {options?.map((option) => 
            <option value={option.value} key={option.value}>{option.label}</option>
          )}
        </select>
        {additionalMessage && <div>{additionalMessage}</div>}
    </div>
)