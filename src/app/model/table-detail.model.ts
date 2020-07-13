export interface TableDetails{
    table_name: string;
    column_number: number;
    record_number: number;
    created_date:string;
    update_date: string;
    column_details?: any[];
}