export interface EmployeeTypes {
    id: number,
    name: string,
    status: string,
    changeEmployeeStatus: (id: number, status: string) => void
}
