import React from 'react'
import { Link } from 'gatsby'
import PropTypes from "prop-types"
import Img from "gatsby-image"
import stopwatch from '../../../images/stopwatch.svg'

import * as style from './article-preview.module.scss'
import ImageLabel, { ImageLabelPropTypes } from '../../atoms/image-label/image-label'

const ArticlePreview = ({ title, date, uri, team, horizontal, imageLabelProps, size, outterClass, img, hideTeamLink = false }) => {
  return (
    <div className={`${style.content} ${!!horizontal ? style.content__horizontal : ''} ${outterClass?.content || ''} `}>
      <div className={style.image}>
        <Link className={style.image__content} to={`/${uri}`}>
          {!!img && !horizontal && <Img fluid={img} imgStyle={{ objectFit: "fill" }} />}
          {!!img && horizontal && <Img className={style.squareImage} fluid={img} imgStyle={{ objectFit: "cover" }} />}
          {!!imageLabelProps && <ImageLabel {...imageLabelProps} className={style.imageLabel} />}
        </Link>
      </div>
      <div className={`${style.infoContent}  ${size === 'lg' ? style.infoContent__lg : ''} ${outterClass?.info ? outterClass.info : ''}`}>
        <Link className={`${style.title} ${size === 'lg' ? style.title__lg : ''} ${size === 'sm' ? style.title__sm : ''} ${outterClass?.title ? outterClass.title : ''}`} to={`/${uri}`}>
          {title}
        </Link>
        <div className={style.subtitle}>
          {!!team && !hideTeamLink && <>
            <Link className={`${style.subtitle__link} ${outterClass?.subtitleItem ? outterClass.subtitleItem : ''}`} to={`/${team.url}`}>
              {team.name}
            </Link>
          </>}
          {!!date && <>
            <img className={style.subtitle__image} alt='stopwatch' src={stopwatch} />
            <p className={`${style.subtitle__date} ${outterClass?.subtitleItem ? outterClass.subtitleItem : ''}`}>{date}</p>
          </>}
        </div>
      </div>
    </div>
  )
}

const TeamProps = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string,
}

const outterClassProps = {
  info: PropTypes.any,
  content: PropTypes.any,
  subtitleItem: PropTypes.any
}

export const ArticlePreviewProps = {
  title: PropTypes.string,
  date: PropTypes.string,
  uri: PropTypes.string,
  img: PropTypes.any,
  team: PropTypes.shape(TeamProps),
  horizontal: PropTypes.bool,
  imageLabelProps: PropTypes.shape(ImageLabelPropTypes),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  outterClass: PropTypes.shape(outterClassProps),
}

ArticlePreview.defaultProps = {
  size: 'md'
}

ArticlePreview.propTypes = ArticlePreviewProps

export default ArticlePreview