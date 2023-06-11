export interface TableColumn {
    name: string;
    label: string;
}

export interface TableProps<T> {
    rows: T[],
    columns: TableColumn[]
}