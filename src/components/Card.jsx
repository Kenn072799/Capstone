import React from 'react'

const Card = ({children, className = ""}) => {
  return (
    // Use for service card
    <div className={`bg-white rounded-2xl shadow-md border border-secondary-100 ${className}`}>
        {children}
    </div>
  )
}

export default Card