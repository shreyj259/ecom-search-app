import React, { useState } from 'react'

interface Props{
  title:string,
  children:any

}

const AccordionComponent = ({title,children}:Props ) => {
  const [isActive,setIsActive]=useState(false);

  const changeHandler=()=>{
    console.log(isActive);
    setIsActive(prev=>!prev)
  }

  return (
    <div className='accordion-container'>
      <div className="accordion-control-bar">
      <div className="accordion-title">
        {title}
      </div>
      <div onClick={changeHandler} className={`${isActive?"active":""} accordion-button `}>
      <svg xmlns="http://www.w3.org/2000/svg" fill='currentColor' width="24" height="24" viewBox="0 0 24 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/></svg>
      </div>
      </div>
      <div className={` ${isActive?"active":""} accordion-panel`}>
        {children}
      </div>
    </div>
  )
}

export default AccordionComponent