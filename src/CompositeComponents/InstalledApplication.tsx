import React , {FC} from 'react'

interface InstallApplicationProps {
    title:string,
    image:string,
    caption:string,
    active? : boolean
}

const InstalledApplication:FC<InstallApplicationProps> = ({title,image,caption , active}) => {
  return (
    <div className = {`InstallApplication-container ${active ? 'active-application':''}`}>
        <img src={image} alt={title} />
        <div>
            <h2>{title}</h2>
            <p>{caption}</p>
        </div>
    </div>
  )
}

export default InstalledApplication