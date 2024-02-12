import { Fragment } from "react";

interface Props<T> {
   data: T[];
   emptyMessage?: string;
   extractKey: (item: T) => string | number;
   renderItem: (item: T, index: number) => React.ReactNode;
} 

// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-constraint
export const List = <T extends unknown>({ data, emptyMessage, extractKey, renderItem }: Props<T>) => (
<div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
    {!data.length && <>{emptyMessage}</>}
    {data.map((item, index) => <Fragment key={extractKey(item)}>{renderItem(item, index)}</Fragment>)}
</div>
)