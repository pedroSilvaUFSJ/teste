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

const ArticleDetailTemplate = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title;
  const allNodes = data?.allMarkdownRemark?.edges?.map(({ node }) => node);
  const filterNode = (tag) => allNodes.filter(({ frontmatter }) => frontmatter.tag === tag)

  const article = data.markdownRemark;
  const articleHeader = article?.frontmatter;

  const topFivePosts = filterNode('topfive').map(createTopFiveArticleObject);

  const morePosts = { title: 'Meer over RSC Anderlecht', to: 'RSC', linkText: 'Alles over RSC Anderlecht', articles: filterNode('carousel-1').map(createPreviewArticleObject).slice(0, 3) };
  const postCarrousel = [{ title: 'Meer Australian Open', linkText: 'Alles over voetbal', to: 'Voetbal', articles: filterNode('carousel-2').map(createPreviewArticleObject) }];

  const ads = filterNode('advertisement');

  const articleContentProps = {
    title: articleHeader.title,
    teamName: articleHeader.teamName,
    date: articleHeader.date,
    author: articleHeader.author,
    featuredImage: {
      img: articleHeader.featuredImage?.childImageSharp?.fluid,
      label: { icon: 'play' },
      alt: articleHeader.featuredImageAlt
    },
    advertisement: getAdvertisement(ads, 'lg'),
  }

  const articleFooterProps = {
    advertisement: getAdvertisement(ads, 'md'),
  }

  const teamHeaderProps = (data?.teamInfo) ? createHeaderObj(data?.teamInfo) : null

  return (
    <Layout location={location}>
      <Helmet title={`${siteTitle} - ${articleHeader.title} `} />
      {teamHeaderProps && <TeamHeaderSection {...teamHeaderProps} />}
      <div className={articleDetailStyles.content}>
        <ArticleContent {...articleContentProps} >
          {article.html}
        </ArticleContent>
        <ArticleFooter {...articleFooterProps} />
        {!!morePosts && <MorePostsSection data={morePosts} />}
        {!!postCarrousel?.length && <CarouselSection carousels={postCarrousel} />}
        {!!topFivePosts?.length && <TopFiveSection posts={topFivePosts} />}
        <YourChannel />
        <Newsletter />
      </div>
    </Layout>
  )
}

export default ArticleDetailTemplate

export const pageQuery = graphql`
  query BlogPostBySlug (
    $id: String!
    $team: String
  ) {
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
      fields {
        slug
      }
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
