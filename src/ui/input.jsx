import React, { useRef } from 'react'

const Input = ({type = 'text', label, value, setValue}) => {
  
  return (
    <div className="form-floating mt-2">
            <input 
                type={type} 
                className="form-control" 
                // id="floatingInput" 
                placeholder={label} 
                value={value} 
                onChange={e=> setValue(e.target.value)}/>
            <label htmlFor="floatingInput">{label}</label>
    </div>
  )
}

export default Input