import React from 'react'

interface Props{
  name:string,
  image:string
}

const SuggestionCard = ({name,image}:Props) => {
  return (
    <div className='suggestion-card'>
      <div className="suggestion-card-img-container">
        <img src={image} alt="" />
      </div>
      <div className="suggestion-card-title">
        {name}
      </div>
    </div>
  )
}

export default SuggestionCard