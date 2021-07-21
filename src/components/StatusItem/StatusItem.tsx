import React from 'react'
import {statusTypes} from '../../interfaces/statusTypes'
import './style.scss'

const StatusItem: React.FC<statusTypes> = (props: statusTypes) => {
    return (
        <div className={`status-item  ${props.status.toLowerCase() === props.item ? 'active' : ''}`}
             onClick={() => {
                 props.onStatusChange(props.item)
             }}
        >
                <span>
                    {props.item}
                </span>
        </div>
    )
}

export default StatusItem
