import React from 'react'
import PropTypes from "prop-types"

import * as crestStyles from './crest.module.scss'
import Img from "gatsby-image"

const Crest = ({ crest }) => {
    return <>
        <div className={crestStyles.content}>
            <Img className={crestStyles.image} fluid={crest} imgStyle={{ objectFit: "fill" }} />
        </div>
    </>
}

Crest.propTypes = {
    crest: PropTypes.any.isRequired,
}

export default Crest