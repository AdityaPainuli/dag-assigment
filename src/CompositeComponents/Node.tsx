import React , {FC} from 'react'

interface NodeInterface {
    title:string,
    image:string,
    caption:string
}

const Node:FC<NodeInterface> = ({title,image,caption}) => {
  return (
    <div className = "node-container">
        <img src = {image} alt = {title} />
        <div>
          <h2>{title}</h2>
          <p>{caption}</p>
        </div>
    </div>
  )
}

export default Node