import React from 'react'
import {useState, useEffect} from 'react'
import Employee from '../Employee/Employee'
import {userTypes} from '../../interfaces/userTypes'
import {getEmployees} from '../../api/getEmployees'
import {patchEmployees} from '../../api/patchEmployees'
import './style.scss'


const UserList: React.FC = () => {
    const [employee, setEmployee] = useState<userTypes[]>([])


    useEffect(() => {
        getEmployees()
            .then(response => setEmployee(response))
    }, [])

    const changeEmployeeStatus = (id: number, status: string) => {
        patchEmployees(id, status)
            .then(() => {
                const nextEmployee = employee.map(it => {
                    if (it.id === id) {
                        return {
                            ...it,
                            status
                        }
                    }
                    return it
                })
                setEmployee(nextEmployee)
            })
    }

    return (
        <>
            <div className="employee-cover">
                {employee.map(item => (
                    <Employee key={item.id}
                              status={item.status}
                              id={item.id}
                              changeEmployeeStatus={changeEmployeeStatus}
                              name={item.username}
                    />
                ))
                }
            </div>
        </>
    )
}

export default UserList
