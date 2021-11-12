import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"

import * as advertismentStyles from './advertisement.module.scss'

const Advertisement = ({ image, imageSm, size, link }) => (
    <div className={`${advertismentStyles.content} ${size === 'lg' ? advertismentStyles.content__lg : ''}`}>
        <a className={advertismentStyles.image} href={link} target='_blank' rel="noreferrer">
            <Img fluid={image} imgStyle={{ objectFit: "contain" }} />
        </a>
        {!!imageSm &&
            <a className={advertismentStyles.imageSmall} href={link} target='_blank' rel="noreferrer">
                <Img fluid={imageSm} imgStyle={{ objectFit: "contain" }} />
            </a>
        }
    </div >
)

export const AdvertisementProps = {
    image: PropTypes.any.isRequired,
    imageSm: PropTypes.any,
    size: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
}

Advertisement.propTypes = AdvertisementProps

export default Advertisement