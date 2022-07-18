import React from 'react'
import MotionDiv from './MotionDiv'
import classes from '../styles/CommonStyles.module.css'

const ZoomImage = ({image, exitZoom}) => {
  
  return (
   <MotionDiv>
     <div onClick={exitZoom} className={classes.overlay_modal} />
     <div>
        <img className={classes.zoom_image} src={image}>
        </img>
     </div>
   </MotionDiv>
  )
}

export default ZoomImage