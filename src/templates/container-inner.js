import React from 'react'
import { content } from './container-inner.module.scss'

const ContainerInner = ({ className, children }) => (
  <div className={`${content} ${className ? className : ''}`}>
    {children}
  </div >
)

export default ContainerInner
