import React from 'react'

const Container = ({ className, children }) => (
  <div style={{ width: '100%', maxWidth: '1440px', margin: '0 auto', overflow: 'hidden' }} className={`container ${className ? className : ''}`}>
    {children}
  </div >
)

export default Container
