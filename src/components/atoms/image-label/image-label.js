import React from 'react'
import PropTypes from "prop-types"

import * as styles from './image-label.module.scss'
import greenBackground from '../../../images/label-green.svg'
import blackBackground from '../../../images/label-black.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ImageLabel = ({ text, icon, black, className }) => {
    const hasText = !!text || typeof text === 'number';
    return (
        <div className={`${styles.content} ${className ? className : ''}`}>
            <img alt={`background ${black}`} src={black ? blackBackground : greenBackground} />
            {!!hasText && (
                <svg className={`${styles.svg} ${black ? styles.svg__black : ''}`} width="100%" height="130%" viewBox='0 0 14 4'>
                    <text className={styles.label} lengthAdjust="spacing" x='-1' y="9.4" >
                        {text}
                    </text>
                </svg>
            )}
            {!!icon && (
                <svg className={`${styles.svg} ${black ? styles.svg__black : ''}`} width="100%" height="100%" viewBox='1 0 10 3'>
                    <FontAwesomeIcon icon={icon} />
                </svg>
            )}
        </div>
    )
}

const requiredPropsCheck = (props, propName, componentName) => {
    const noText = !props.text && typeof props.text !== 'number';
    if (noText && !props.icon) {
        return new Error(`One of 'text' or 'icon' is required by '${componentName}' component.`)
    }
    if (props.text && (typeof props.text !== 'string' && typeof props.text !== 'number'))
        return new Error(`Invalid prop 'text' of type '${typeof props.text}' supplied to '${componentName}', expected 'string'.`)
    if (!!props.icon && (typeof props.icon !== 'string'))
        return new Error(`Invalid prop 'icon' of type '${typeof props.icon}' supplied to '${componentName}', expected 'string'.`)
}

export const ImageLabelPropTypes = {
    icon: requiredPropsCheck,
    text: requiredPropsCheck,
    black: PropTypes.bool,
    className: PropTypes.string,
}

ImageLabel.propTypes = ImageLabelPropTypes

export default ImageLabel