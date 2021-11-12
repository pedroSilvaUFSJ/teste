import React from 'react'
import PropTypes from "prop-types"

import * as styles from './more-posts-section.module.scss'
import MorePosts, { MorePostsPropTypes } from '../../molecules/more-posts/more-posts'
import Container from '../../../templates/container'
import ContainerInner from '../../../templates/container-inner'

const MorePostsSection = ({ data }) => (
    <Container>
        <ContainerInner>
            <div className={styles.content}>
                {!!data &&
                    <div className={styles.postContent}>
                        <MorePosts {...data} />
                    </div>
                }
            </div>
        </ContainerInner>
    </Container>
)

MorePostsSection.propTypes = {
    posts: PropTypes.shape(MorePostsPropTypes)
}

export default MorePostsSection