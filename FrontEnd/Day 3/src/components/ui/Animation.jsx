import React from 'react'
import loader from '../../assets/others/loader.gif'
const Animation = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <img src={loader}/>
    </div>
  )
}

export default Animation