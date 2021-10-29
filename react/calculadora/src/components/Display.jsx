import React from 'react'
import './Display.css'

export default props => {
    console.log(props)
    return (<div className="display">{props.value}</div>)
}
    