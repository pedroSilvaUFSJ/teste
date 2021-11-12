import React from "react"
import PropTypes from "prop-types"

import * as landingSectionStyles from './landing-home-section.module.scss'
import ArticlePreview, { ArticlePreviewProps } from "../../molecules/article-preview/article-preview"
import Advertisement, { AdvertisementProps } from "../advertisement/advertisement"
import Container from '../../../templates/container'
import ContainerInner from '../../../templates/container-inner'

const LandingHomeSection = ({ posts, advertisement }) => {
    const mainPosts = posts.slice(0, 4).map((post, index) => {
        const size = (index === 0) ? 'lg' : 'md';
        return { size, ...post }
    })
    const rightPosts = posts.slice(4, advertisement.size === 'lg' ? 5 : 6)

    return <>
        <Container>
            <ContainerInner>
                <div className={`${landingSectionStyles.content}`}>
                    <div className={`${landingSectionStyles.firstColumn} `}>
                        {mainPosts?.map((item, index) => (
                            <div key={`mainPost_${index}`} className={landingSectionStyles.firstColumn__postItem}>
                                <ArticlePreview {...item} horizontal={index !== 0} />
                            </div>
                        ))}
                    </div>
                    <div className={landingSectionStyles.secondColumn}>
                        <div className={landingSectionStyles.secondColumn__advertisement}>
                            <Advertisement {...advertisement} />
                        </div>
                        {rightPosts?.map((item, index) => (
                            <div key={`rightPost_${index}`} className={landingSectionStyles.secondColumn__postItem}>
                                <ArticlePreview {...item} />
                            </div>
                        ))}
                    </div>
                </div>
            </ContainerInner>
        </Container>
    </>
}

export const LandingHomeSectionProps = {
    posts: PropTypes.arrayOf(PropTypes.shape(ArticlePreviewProps)).isRequired,
    advertisement: PropTypes.shape(AdvertisementProps).isRequired
}

LandingHomeSection.propTypes = LandingHomeSectionProps

export default LandingHomeSection