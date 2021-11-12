
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "gatsby";
import PropTypes from "prop-types"

import Slider from '../../atoms/slider/slider';
import * as stylesPostCarousel from './post-carousel.module.scss'
import ArticlePreview, { ArticlePreviewProps } from "../../molecules/article-preview/article-preview";

const PostCarousel = ({ title, articles, linkText, to, className }) => {
    const carrouselItems = articles?.map((item, index) => (
        <div key={`${item.title}${index}`} className={stylesPostCarousel.slider__item}>
            <ArticlePreview {...item} size='sm' hideTeamLink={true} />
        </div>
    ))
    const isBrowser = typeof window !== "undefined"
    return isBrowser && (
        <div className={`${stylesPostCarousel.content} ${className ? className : ''}`}>
            <div className={stylesPostCarousel.header}>
                <h1 className={stylesPostCarousel.header__title}>{title}</h1>
                <Link className={`${stylesPostCarousel.header__link}`} to={`/${to}`}>
                    <span className={stylesPostCarousel.header__link__message}>{linkText}</span><FontAwesomeIcon className={stylesPostCarousel.header__link__icon} icon='arrow-right' />
                </Link>
            </div>
            <div className={stylesPostCarousel.slider}>

                {!!carrouselItems?.length ? <Slider items={carrouselItems} /> : <></>}
            </div>
        </div>
    )
}

export const PostCarouselPropTypes = {
    title: PropTypes.string.isRequired,
    articles: PropTypes.arrayOf(PropTypes.shape(ArticlePreviewProps)).isRequired,
    linkText: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    className: PropTypes.string,
}

PostCarousel.propTypes = PostCarouselPropTypes

export default PostCarousel