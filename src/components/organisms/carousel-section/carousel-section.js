import React from 'react'
import PropTypes from "prop-types"

import * as styles from './carousel-section.module.scss'
import PostCarousel, { PostCarouselPropTypes } from '../../molecules/post-carousel/post-carousel'
import Container from '../../../templates/container'

const CarouselSection = ({ carousels }) => (
    <Container className={styles.content}>
        <div className={styles.inner}>
            {!!carousels.length && carousels?.map((item, index) => (
                !!item.articles.length && (
                    <div key={`carousel-section-${index}`} className={styles.postContent}>
                        <PostCarousel {...item} />
                    </div>
                )
            ))}
        </div>
    </Container>
)

CarouselSection.propTypes = {
    carousels: PropTypes.arrayOf(PropTypes.shape(PostCarouselPropTypes))
}

export default CarouselSection