import React from 'react'

function Shoppreview({title , items}) {


    return (
        <div className='collection-preview'>
             <h1 className="title">{title.toUpperCase()}</h1>
              <div className="preview" >
                  {items.filter( (item , id) => id< 4)
                  .map( item => (
                     <h4>{item.name}</h4> 
                  ))}
              </div>
        </div>
    )
}

export default Shoppreview
