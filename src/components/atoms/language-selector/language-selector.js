import React from 'react'
import PropTypes from "prop-types"
import globe from '../../../images/globe.svg'

import { content, active, image } from './language-selector.module.scss'

const LanguageSelector = ({ value, className }) => (
    <div className={`${content} ${className ? className : ''} ${value.active ? active : ''}`}>
        <h4>{value.active && <img className={image} alt='active language selector' src={globe} />} {value.label}</h4>
    </div>
)

LanguageSelector.propTypes = {
    value: PropTypes.any.isRequired,
    className: PropTypes.any,
}

export default LanguageSelector