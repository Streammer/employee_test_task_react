import React from 'react'
import {statusTypes} from "../../interfaces/statusTypes"
import './style.scss'

const StatusItem:React.FC<statusTypes> = ({status, item, getStatusValue}) => {
    return (
        <>
            <div className={`status-item  ${status.toLowerCase() === item ? 'active' : ''}`}
                 onClick={()=>{getStatusValue(item)}}
            >
                <span>
                    {item}
                </span>
            </div>
        </>
    );
};

export default StatusItem;