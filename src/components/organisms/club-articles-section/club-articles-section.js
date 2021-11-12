import React, { useState } from "react"
import PropTypes from "prop-types"

import * as styles from './club-articles-section.module.scss'
import ArticlePreview, { ArticlePreviewProps } from "../../molecules/article-preview/article-preview"
import Advertisement from "../advertisement/advertisement"
import Container from '../../../templates/container'
import ContainerInner from '../../../templates/container-inner'

const ClubArticlesSection = ({ posts, advertisement }) => {
    const [firstRow] = useState(() => posts.slice(0, 2));
    const [otherPosts, setOtherPosts] = useState(() => posts.slice(2));
    const loadMore = 'Laad voorgaande berichten';
    const outterClass = { title: styles.articleTitle }

    const loadMoreHandler = () => {
        const mockPosts = [...posts];
        console.log('request more posts');
        setOtherPosts(old => [...old, ...mockPosts])
    }

    return (
        <Container>
            <ContainerInner>
                <div className={styles.content}>
                    <div className={styles.main}>
                        <div className={styles.articles}>
                            <div className={styles.firstRow}>
                                {firstRow.map((item, index) => (
                                    <div key={`randonPost_vertical${index}`} className={styles.firstRow__item}>
                                        <ArticlePreview {...item} />
                                    </div>
                                ))}
                            </div>
                            <div className={styles.secondRow}>
                                <div className={styles.secondRow__posts}>
                                    {otherPosts?.map((item, index) => (
                                        <div key={`randonPost_horizontal${index}`} className={styles.secondRow__posts__item}>
                                            <ArticlePreview {...item} horizontal={true} outterClass={outterClass} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className={styles.advertisement}>
                            <Advertisement {...advertisement} />
                        </div>
                    </div>
                    <div className={styles.loadMore}>
                        {<button className={`${styles.loadMore__button}`} onClick={() => loadMoreHandler()}>{loadMore}</button>}
                    </div>
                </div>
            </ContainerInner>
        </Container >
    )
}

ClubArticlesSection.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.shape(ArticlePreviewProps)).isRequired
}

export default ClubArticlesSection