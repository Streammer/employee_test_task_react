import React, {useState} from 'react'
import StatusItem from "../SattusItem/StatusItem"
import EmployeeTypes from "../../interfaces/employeeTypes"
import './style.scss'

const Employee: React.FC<EmployeeTypes> = (props:EmployeeTypes) => {
    const statusArray: Array<string> = [
        'added',
        'in-check',
        'approved',
        'active',
        'inactive'
    ]

    const [employeeStatus, setEmployeeStatus] = useState(statusArray)
    const getStatusValue = (statusValue: string) => {
        props.changeEmployeeStatus(props.id, statusValue)
    }

    return (
        <div className='employee'>
            <div>Employee Name:</div>
            <div className='employee__name'>{props.name}</div>
            <div className='employee__status'>
                {employeeStatus.map(item => (
                        <StatusItem
                            getStatusValue={getStatusValue}
                            key={item}
                            item={item}
                            status={props.status}/>
                    )
                )}
            </div>
        </div>
    )
}

export default Employee