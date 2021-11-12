import React from "react"
import PropTypes from "prop-types"

import * as styles from './random-posts-section.module.scss'
import ArticlePreview, { ArticlePreviewProps } from "../../molecules/article-preview/article-preview"
import Advertisement from "../advertisement/advertisement"
import Container from '../../../templates/container'
import ContainerInner from '../../../templates/container-inner'

const RandomPostsSection = ({ posts, advertisement }) => {
    const firstRow = posts.slice(0, 3)
    const otherPosts = posts.slice(3)
    return (
        <Container className={styles.content}>
            <ContainerInner>
                <div className={styles.firstRow}>
                    {firstRow.map((item, index) => (
                        <div key={`randonPost_vertical${index}`} className={styles.firstRow__item}>
                            <ArticlePreview {...item} />
                        </div>
                    ))}
                </div>
                <div className={styles.secondRow}>
                    <div className={styles.secondRow__posts}>
                        {otherPosts.map((item, index) => (
                            <div key={`randonPost_horizontal${index}`} className={styles.secondRow__posts__item}>
                                <ArticlePreview {...item} horizontal={true} />
                            </div>
                        ))}
                    </div>
                    <div className={styles.secondRow__advertisement}>
                        <Advertisement {...advertisement} />
                    </div>
                </div>
            </ContainerInner>
        </Container >
    )
}

RandomPostsSection.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.shape(ArticlePreviewProps)).isRequired
}

export default RandomPostsSection