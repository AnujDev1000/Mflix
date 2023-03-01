import React from 'react'
import getMoneyUtil from '../../utils/getMoneyUtil'
import { RiMoneyDollarCircleLine } from "react-icons/ri"

const DetailsMoney = ({money, name}) => {
    return (
        <div className="budget-revenue">
            {name === "budget" ?
                <span className="badge bg-primary pe-4 me-2 text-start shadow-sm">
                    <span className="text-capitalize text-light" >{name}</span>
                    <p className="fs-6 m-0 mt-1 fw-bold">{getMoneyUtil(money)}</p>
                </span> 
                :
                <span className="badge bg-success pe-4 me-2 text-start shadow-sm">
                    <span className="text-capitalize text-light" >{name}</span>
                    <p className="fs-6 m-0 mt-1 fw-bold">{getMoneyUtil(money)}</p>
                </span> 
            }
        </div>
    )
}

export default DetailsMoney
