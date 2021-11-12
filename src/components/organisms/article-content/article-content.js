import React from 'react'
import PropTypes from "prop-types"
import Img from "gatsby-image"

import Advertisement, { AdvertisementProps } from '../advertisement/advertisement'
import Container from '../../../templates/container'
import ContainerInner from '../../../templates/container-inner'
import ImageLabel, { ImageLabelPropTypes } from '../../atoms/image-label/image-label'
import SocialNetwork from '../../atoms/social-network/social-network'

import * as styles from './article-content.module.scss'
import profileIcon from '../../../images/profile.svg'
import stopwatch from '../../../images/stopwatch.svg'

const ArticleContent = ({ title, teamName, date, author, advertisement, featuredImage, children }) => {
    const arr = children.split('</strong></p>');
    const firstPart = arr[0] + '</strong></p>';
    const secondPart = arr[1];
    const before = <div id='articleContent' className={`${styles.htmlContent}`} dangerouslySetInnerHTML={{ __html: firstPart }} />;
    const after = <div id='articleContent' className={`${styles.htmlContent}`} dangerouslySetInnerHTML={{ __html: secondPart }} />;
    return (
        <Container >
            <ContainerInner>
                <div className={`${styles.content}`} >
                    <div className={styles.header}>
                        <h1 className={styles.header__title}>{title}</h1>
                        <div className={styles.header__subtitle}>
                            <p>{teamName}</p>
                            <div className={styles.header__subtitle__item}>
                                <img className={styles.header__subtitle__date__icon} alt='stopwatch' src={stopwatch} />
                                <p>{date}</p>
                            </div>
                            <div className={styles.header__subtitle__item}>
                                <img className={styles.header__subtitle__profile} alt='profile icon' style={{ width: '16px' }} src={profileIcon} />
                                <p>{author}</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.body}>
                        <div className={styles.landing}>
                            <div className={styles.landing__socialNetwork}>
                                <SocialNetwork />
                            </div>
                            <div className={styles.landing__content}>
                                <div className={styles.info}>
                                    <div className={styles.image}>
                                        {<Img key='featuredImage' fluid={featuredImage.img} imgStyle={{ objectFit: "cover" }} className={styles.image__featured} />}
                                        {!!featuredImage?.label && <ImageLabel {...featuredImage.label} className={styles.imageLabel} />}
                                    </div>
                                    {!!featuredImage?.alt && <p className={styles.imageAlt}>{featuredImage.alt}</p>}
                                    {before}
                                    <div className={styles.middleAdvertisement}><Advertisement {...advertisement} /></div>
                                    {after}
                                </div>
                                <div className={styles.advertisement}>
                                    <Advertisement {...advertisement} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ContainerInner>
        </Container>
    )
}

export const ArticleContentProps = {
    title: PropTypes.string.isRequired,
    teamName: PropTypes.string,
    date: PropTypes.string,
    author: PropTypes.string,
    advertisement: PropTypes.shape(AdvertisementProps).isRequired,
    featuredImage: PropTypes.shape({
        img: PropTypes.any,
        icon: PropTypes.shape(ImageLabelPropTypes),
        alt: PropTypes.string,
    })
}

ArticleContent.propTypes = ArticleContentProps

export default ArticleContent