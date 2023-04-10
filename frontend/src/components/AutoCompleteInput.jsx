import React from 'react'

const AutoCompleteInput = ({data, title}) => {
    return (
        <div className="auto-complete-input position-relative" >
            <input className="form-control" id={title} type="text" name={title} placeholder={title} />
            <div className="d-none data position-absolute top-0 left-0 top-100 d-flex flex-column bg-light text-dark mh-200 overflow-auto w-100 z-index-3">
                {data && data.map(d => 
                    <span className="hover-primary ps-3 cursor-pointer">{d[`${title}`]}</span>
                )}
            </div>
        </div>
    )
}

export default AutoCompleteInput
