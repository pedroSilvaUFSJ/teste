import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Layout from './layout'

import * as articleDetailStyles from './article-detail.module.scss'

import TopFiveSection from '../components/organisms/top-five-section/top-five-section'
import MorePostsSection from '../components/organisms/more-posts-section/more-posts-section'
import CarouselSection from '../components/organisms/carousel-section/carousel-section'
import YourChannel from '../components/molecules/your-channel/your-channel'
import Newsletter from '../components/molecules/newsletter-section/newsletter'
import TeamHeaderSection from '../components/organisms/team-header-section/team-header-section'
import ArticleContent from '../components/organisms/article-content/article-content'
import ArticleFooter from '../components/organisms/article-footer/article-footer'
import { createPreviewArticleObject, createTopFiveArticleObject, getAdvertisement, createHeaderObj } from '../utils/utils'

const ArticleDetailTemplateDrupal = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title;
  const allNodes = data?.allMarkdownRemark?.edges?.map(({ node }) => node);
  const filterNode = (tag) => allNodes.filter(({ frontmatter }) => frontmatter.tag === tag)

  const article = data.markdownRemark;
  const articleHeader = article?.frontmatter;

  const ads = filterNode('advertisement');
  const {title, paragraphs} = data.drupal.node;
  const articleContentProps = {
    title,
    teamName: 'dummy',
    date: '306',
    author: 'author',
    advertisement: getAdvertisement(ads, 'lg'),
  }
  return (
    <Layout location={location}>
      <Helmet title={`${siteTitle} - ${title} `} />
      <div className={articleDetailStyles.content}>
        <YourChannel />
        <Newsletter />
      </div>
    </Layout>
  )
}

export default ArticleDetailTemplateDrupal

export const pageQuery = graphql`
  query articleDetail (
    $id: String!
    $team: String
  ) {
  
    drupal {
      node: nodeById(id: $id) {
        title
        ... on Drupal_NodeArticle {
          nid
          uuid
          paragraphs: fieldParagraphs {
            entity {
              ... on Drupal_ParagraphAfbeelding {
                type: __typename
                id
                fieldImage {
                  url
                  title
                }
              }
              ... on Drupal_ParagraphText {
                type:__typename
                id
                text: fieldPartekstText {
                  raw: processed
                }
              }
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        teamName
        date(fromNow: true)
        author
        featuredImage {
          childImageSharp {
            fluid(quality: 100, maxWidth: 800){
              ...GatsbyImageSharpFluid
            }
          }
        }
        featuredImageAlt
      }
    }
    teamInfo: markdownRemark(fields: { slug: { eq: $team } }) {
      frontmatter {
        title
        cover {
          childImageSharp {
            fluid(quality: 100, maxWidth: 160){
              ...GatsbyImageSharpFluid
            }
          }
        }
        crest {
          childImageSharp {
            fluid(quality: 100, maxWidth: 800){
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            tag
            title
            description
            date(fromNow: true)
            author
            teamName
            teamUrl
            championship
            featuredImage {
              childImageSharp {
                fluid(quality: 100, maxWidth: 800){
                  ...GatsbyImageSharpFluid
                }
              }
            }
            featuredImageSm {
              childImageSharp {
                fluid(quality: 100, maxWidth: 800){
                  ...GatsbyImageSharpFluid
                }
              }
            }
            size
            advertisementUrl
            icon
          }
        }
      }
    }
  }
`
