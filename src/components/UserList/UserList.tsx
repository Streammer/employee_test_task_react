import React from 'react'
import {useState, useEffect} from 'react'
import Employee from "../Employee/Employee"
import {getRequest, patchRequest} from '../../api/requests'
import {BASE} from "../../urlsList"
import {userTypes} from "../../interfaces/userTypes"
import {getEmployees} from "../../api/getEmployees"
import './style.scss'


const UserList: React.FC = () => {
    const [employee, setEmployee] = useState<userTypes[]>([])
    // const getEmployees = () => {
    //     getRequest(`${BASE}employees`)
    //         .then((response) => {
    //             setEmployee(response.data)
    //         })
    // }

    useEffect(() => {
        getEmployees()
            .then((response) => {
                setEmployee(response.data)
            })
    }, [])

    const changeEmployeeStatus = (id: number, status: string) => {
        patchRequest(`${BASE}employees/${id}`, {id, status})
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