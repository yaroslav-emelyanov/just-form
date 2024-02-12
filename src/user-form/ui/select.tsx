import { Space, Typography, Select as AntdSelect } from "antd";

interface Option {
    label: string;
    value: string;
}


interface Props {
    id?: string;
    label?: string;
    value?: string | null;
    additionalMessage?: string;
    options?: Option[]
    onChange?: (value: string) => void;
    hasError?: boolean; 
}

export const Select: React.FC<Props> = ({ id, label, value, options, onChange, additionalMessage, hasError }) => (
    <Space style={{ width: '100%' }} direction='vertical' size={4}>
        <Typography.Text strong>{label}</Typography.Text>
        <AntdSelect id={id} style={{ width: '100%' }} value={value} options={options} onChange={onChange}  />
        {additionalMessage && <Typography.Text type={hasError ? 'danger' : 'secondary'}>{additionalMessage}</Typography.Text>}
    </Space>
)