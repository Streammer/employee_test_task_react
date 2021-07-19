import React, {useState} from 'react';
import './style.scss';
import EmployeeTypes from "../../interfaces/employeeTypes";
import StatusItem from "../SattusItem/StatusItem";

const Employee: React.FC<EmployeeTypes> = ({id, name, status, changeEmployeeStatus}) => {
    const statusArray:Array<string> = [
        'added',
        'in-check',
        'approved',
        'active',
        'inactive'
    ]

    const [employeeStatus, setEmployeeStatus] = useState(statusArray)
    const getStatusValue = (statusValue: string) => {
        changeEmployeeStatus(id, statusValue);
    }

    return (
        <>
            <div className='employee'>
                <div>Employee Name:</div>
                <div className='employee__name'>{name}</div>
                <div className='employee__status'>
                    {employeeStatus.map(item => (
                            <StatusItem
                                getStatusValue={getStatusValue}
                                key={item}
                                item={item}
                                status={status}/>
                        )
                    )}
                </div>
            </div>
        </>
    )
}

export default Employee