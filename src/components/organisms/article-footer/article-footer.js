import React from 'react'
import PropTypes from "prop-types"

import Advertisement, { AdvertisementProps } from '../advertisement/advertisement'
import SocialNetwork from '../../atoms/social-network/social-network'

import * as styles from './article-footer.module.scss'
import LikeButton from '../../atoms/like-button/like-button'
import ShareButton from '../../atoms/share-button/share-button'
import MoreAbout from '../../molecules/more-about/more-about'
import Container from '../../../templates/container'
import ContainerInner from '../../../templates/container-inner'
import Reactions from '../../molecules/reactions/reactions'

const ArticleFooter = ({ advertisement }) => {
    const reactions = [
        {
            user: 'Jos Verthongen',
            date: '2u geleden',
            comment: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
        },
        {
            user: 'John De Mol',
            date: '2u geleden',
            comment: 'Class aptent taciti sociosqu ad litora  nostra, per inceptos himenaeos. '
        },
        {
            user: 'Martijn Vandeplas',
            date: '2u geleden',
            comment: 'Class aptent taciti sociosqu ad litora  nostra, per inceptos himenaeos.'
        },
        {
            user: 'Pedro Silva',
            date: '2u geleden',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            user: 'David',
            date: '2u geleden',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            user: 'Philip',
            date: '2u geleden',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
    ];

    const moreAbout = [
        { description: 'RSCA Anderlecht', to: 'rscaAnderlecht' },
        { description: 'Jupiler Pro League', to: 'JupilerProLeague' }
    ]

    const title = 'Fan van dit artikel?'
    return (
        <Container>
            <ContainerInner>
                <div className={styles.content}>
                    <div className={styles.firstLayer}>
                        <div className={styles.firstLayer__main}>
                            <div className={styles.sharing}>
                                <h1 className={styles.sharing__title}>{title}</h1>
                                <div className={styles.sharing__socialNetwork}>
                                    <LikeButton className={styles.likeButton} />
                                    <div className={styles.socialMediaContainer}>
                                        <SocialNetwork horizontal={true} className={styles.socialNetwork} />
                                        <ShareButton />
                                    </div>
                                </div>
                            </div>
                            <Reactions items={reactions} />
                        </div>
                        <div className={styles.firstLayer__advertisement}>
                            <Advertisement {...advertisement} />
                        </div>
                    </div>
                    <MoreAbout items={moreAbout} />
                </div>
            </ContainerInner>
        </Container>
    )
}

ArticleFooter.propTypes = {
    advertisement: PropTypes.shape(AdvertisementProps)
}

export default ArticleFooter