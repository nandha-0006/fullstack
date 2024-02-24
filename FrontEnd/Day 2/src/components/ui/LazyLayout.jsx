import React, { Suspense } from 'react'
import PropTypes from "prop-types";
import Animation from './Animation';

const LazyLayout = ({component: Component, ...rest}) => {
  return (
    <Suspense fallback={<Animation />}>
        <Component {...rest} />
    </Suspense>
  )
}
LazyLayout.propTypes = {
    component:PropTypes.elementType.isRequired   //coz is use element like p tag,img ,loaderetc
}
export default LazyLayout