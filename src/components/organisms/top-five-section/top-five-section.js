import React from 'react'
import PropTypes from "prop-types"

import * as topFiveSectionStyles from './top-five-secion.module.scss'
import flameImage from '../../../images/flame.svg'
import ArticlePreview, { ArticlePreviewProps } from '../../molecules/article-preview/article-preview'
import Container from '../../../templates/container'
import ContainerInner from '../../../templates/container-inner'

const TopFiveSection = ({ posts }) => {
  const topThree = posts.slice(0, 3);
  const lastTwo = posts.slice(3, 5);

  const verticalArticlePreviewClass = {
    content: topFiveSectionStyles.verticalArticlePreviewContent,
    subtitleItem: topFiveSectionStyles.subtitleItem,
    info: topFiveSectionStyles.verticalArticlePreviewInfo
  }

  const horizontalArticlePreviewClass = {
    content: topFiveSectionStyles.horizontalArticlePreviewContent,
    info: topFiveSectionStyles.horizontalArticlePreviewInfo,
    subtitleItem: topFiveSectionStyles.subtitleItemHorizontal
  }

  return (
    <Container className={topFiveSectionStyles.content}>
      <ContainerInner>
        <div className={topFiveSectionStyles.header}>
          <img className={topFiveSectionStyles.header__image} src={flameImage} alt='flame icon' />
          <h1 className={topFiveSectionStyles.header__title}>Populair op Fan2Be</h1>
        </div >
        <div className={topFiveSectionStyles.firstRow}>
          {topThree.map((item, index) => (
            <div key={`topThree__${index}`} className={topFiveSectionStyles.firstRow__item}>
              <ArticlePreview {...item} outterClass={verticalArticlePreviewClass} />
            </div>
          ))}
        </div>
        {lastTwo && (
          <div className={topFiveSectionStyles.secondRow}>
            {lastTwo.map((item, index) => (
              <div key={`lastTopFive__${index}`} className={topFiveSectionStyles.secondRow__item}>
                <ArticlePreview {...item} horizontal outterClass={horizontalArticlePreviewClass} />
              </div>
            ))}
          </div>)
        }
      </ContainerInner>
    </Container>
  )
}

export const TopFiveProps = {
  posts: PropTypes.arrayOf(PropTypes.shape(ArticlePreviewProps)).isRequired,
}

TopFiveSection.propTypes = TopFiveProps

export default TopFiveSection