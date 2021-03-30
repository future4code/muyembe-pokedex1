import React, { useState } from 'react'
import {ProgressBar, ProgressDone} from './styles'

export const Progress = ({done}) => {
    const [style, setStyle] = useState({})

    setTimeout(() => {
        const newStyle = {
            opacity: 1, 
            width: `${done}%`
            
        }
        setStyle(newStyle)
    }, 1000)



    return (
        <ProgressBar className='progress'>
            <ProgressDone className='progressDone' style={style}>
            {done}
            </ProgressDone>
        </ProgressBar>
    )
}