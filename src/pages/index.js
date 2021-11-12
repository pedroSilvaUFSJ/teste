import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

import Layout from '../templates/layout'
import * as style from './index.module.scss'

import Newsletter from '../components/molecules/newsletter-section/newsletter'
import YourChannel from '../components/molecules/your-channel/your-channel'
import LandingHomeSection from '../components/organisms/landing-home-section/landing-home-section';
import TopFiveSection from '../components/organisms/top-five-section/top-five-section';
import CarouselSection from '../components/organisms/carousel-section/carousel-section';
import RandomPostsSection from '../components/organisms/random-posts-section/random-posts-section';
import { createPreviewArticleObject, createTopFiveArticleObject, getAdvertisement } from '../utils/utils'

const RootIndex = ({ data, location }) => {
  const siteTitle = data?.site.siteMetadata.title;
  const allNodes = data?.allMarkdownRemark?.edges?.map(({ node }) => node);
  const filterNode = (tag) => allNodes.filter(({ frontmatter }) => frontmatter.tag === tag)
  const ads = filterNode('advertisement');

  // Teaser items retrieved from drupal
  const items = data.drupal.teasers.items;
  console.log(items);

  /**
   * Used to show landing section
   */
  const landingPosts = filterNode('landing').map(createPreviewArticleObject)
  /**
   * Used on topFive section
   */
  const topFivePosts = filterNode('topfive').map(createTopFiveArticleObject);
  /**
   * Used on carrousel section
   */
  const firstCarousel = {
    title: 'Jupiler Pro League',
    articles: filterNode('carousel-1').map(createPreviewArticleObject),
    linkText: 'Jupiler Pro League',
    to: 'jupiler',
    qtd: 5
  }

  const secondCarousel = {
    title: 'Australian Open',
    articles: filterNode('carousel-2').map(createPreviewArticleObject),
    linkText: 'Alles over Austrialian Open',
    to: 'austrialianOpen',
    qtd: 5
  }

  /**
   * Used on Random posts section
   */
  const randomPosts = filterNode('random').map(createPreviewArticleObject)

  return (
    <Layout {...location}>
      <div className={style.content}>
        <Helmet title={siteTitle} />
        <div className="wrapper">
          <LandingHomeSection posts={landingPosts} advertisement={getAdvertisement(ads, 'lg')} />
          <TopFiveSection posts={topFivePosts} />
          <RandomPostsSection posts={randomPosts} advertisement={getAdvertisement(ads, 'md')} />
          <CarouselSection carousels={[firstCarousel, secondCarousel]} />
          <YourChannel />
          <Newsletter />
        </div>
      </div>
    </Layout>
  )
}

export default RootIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
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
    drupal {
      
      clubs: nodeQuery(
        filter: {conditions: {field: "type", value: "fanclub", operator: EQUAL}}
      ) {
        count
        entities {
          entityId
          ... on Drupal_NodeFanclub {
            logo: fieldFanclubLogo {
              url
              alt
            }
            cover: fieldFanclubBanner {
              url
              alt
            }
            fieldFanclubType
            entityType
            status
            title
            entityId
            type {
              entity {
                ... on Drupal_NodeArticle {
                  nid
                  uuid
                }
              }
            }
          }
        }
      }
      
      # Teaser articles homepage
      teasers: nodeQuery(
        filter: {conditions: {field: "type", value: "article", operator: EQUAL}}
        limit: 10
      ) {
        count
        items: entities {
        nid: entityId
        ... on Drupal_NodeArticle {
          paragraphs: fieldParagraphs {
            items: entity {
              ... on Drupal_ParagraphAfbeelding {
                imageParagraph: fieldImage {
                  original: url
                  thumbnail: derivative(style: THUMBNAIL) {
                    url
                    width
                    height
                  }
                }
              }
            }
          }
          title
          url: path {
            slug: alias
          }
          publicationDate: fieldPublicationDate {
            date
          }
        }
      }
      }
    }
  }
`
