// import { Fragment } from "react";
import { List as AntdList } from 'antd';

interface Props<T> {
   data: T[];
   emptyMessage?: string;
   extractKey: (item: T) => string | number;
   renderItem: (item: T, index: number) => React.ReactNode;
} 

// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-constraint
export const List = <T extends unknown>({ data, emptyMessage, extractKey, renderItem }: Props<T>) => (
   <AntdList dataSource={data} renderItem={renderItem} rowKey={extractKey} locale={{ emptyText: emptyMessage }} />
)