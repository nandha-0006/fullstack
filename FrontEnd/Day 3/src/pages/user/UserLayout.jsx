import React from 'react'
import PropTypes from 'props-types'
import Navbar from '../../components/ui/NavBar'
const UserLayout = ({children}) => {
  return (
    <div>
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
        <footer>footer</footer>
        
    </div>
  )
}

UserLayout.protoTypes = {
    children : PropTypes.node.isRequired
}

export default UserLayout