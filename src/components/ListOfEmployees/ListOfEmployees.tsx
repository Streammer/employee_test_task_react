import React from 'react';
import './style.scss'
import Employee from "../Employee/Employee";
import {useState, useEffect} from 'react';
import {getRequest, patchRequest} from '../../api/requests'
import {getRequestTypes} from "../../interfaces/getRequestTypes";

const ListOfEmployees: React.FC = () => {
    const [employee, setEmployee] = useState<getRequestTypes[]>([])

    const getEmployees = () => {
        getRequest('http://localhost:3001/employees')
            .then((response) => {
                setEmployee(response.data)
            })
    }
    useEffect(() => {
        getEmployees()
    }, [])

    const changeEmployeeStatus = (id: number, status: string) => {
        patchRequest(`http://localhost:3001/employees/${id}`, {id, status})
            .then(() => {
                const nextEmployee = employee.map(it => {
                    if (it.id === id) {
                        return {
                            ...it,
                            status
                        };
                    }
                    return it;
                });
                setEmployee(nextEmployee);
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
                              name={item.username}/>
                ))
                }
            </div>
        </>
    );
};

export default ListOfEmployees;