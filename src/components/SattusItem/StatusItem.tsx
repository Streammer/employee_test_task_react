import React from 'react'
import './style.scss'
import {statusTypes} from "../../interfaces/statusTypes"

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