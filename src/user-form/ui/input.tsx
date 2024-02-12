import { HTMLInputTypeAttribute } from 'react';
import { Input as AntdInput, Space, Typography } from 'antd'

interface Props {
    id?: string;
    value?: string | number;
    label?: string;
    type?: HTMLInputTypeAttribute;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    additionalMessage?: string;
    hasError?: boolean;
}

export const Input: React.FC<Props> = ({ id, label, type, onChange, value, additionalMessage, hasError }) => (
    <Space style={{ width: '100%' }} direction='vertical' size={4}>
        <Typography.Text strong>{label}</Typography.Text>
        <AntdInput id={id} value={value} type={type} onChange={onChange} />
        {additionalMessage && <Typography.Text type={hasError ? 'danger' : 'secondary'}>{additionalMessage}</Typography.Text>}
    </Space>
)