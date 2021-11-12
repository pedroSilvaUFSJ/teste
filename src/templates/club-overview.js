import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Layout from './layout'

import * as clubOverviewStyles from './club-overview.module.scss'

import TopFiveSection from '../components/organisms/top-five-section/top-five-section'
import CarouselSection from '../components/organisms/carousel-section/carousel-section'
import ClubArticlesSection from '../components/organisms/club-articles-section/club-articles-section'
import YourChannel from '../components/molecules/your-channel/your-channel'
import Newsletter from '../components/molecules/newsletter-section/newsletter'
import TeamHeaderSection from '../components/organisms/team-header-section/team-header-section'

import { createPreviewArticleObject, createTopFiveArticleObject, getAdvertisement, createHeaderObj } from '../utils/utils'

const ClubOverviewTemplate = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title;
  const allNodes = data?.allnodes?.edges?.map(({ node }) => node);

  const {title} = data.drupal;
  const teamInfo = data.teamInfo;
  const clubeName = teamInfo?.frontmatter.title || title;

  const teamArticles = teamInfo ? allNodes.filter(({ frontmatter }) => frontmatter.teamUrl === teamInfo.fields.slug.split('/')[1]).map(createPreviewArticleObject) : [];
  const filterNode = (tag) => allNodes.filter(({ frontmatter }) => frontmatter.tag === tag)

  const topFivePosts = filterNode('topfive').map(createTopFiveArticleObject);
  const postCarrousel = [{
    title: 'Meer Jupiler Pro League',
    articles: filterNode('carousel-2').map(createPreviewArticleObject),
    linkText: 'Alles over voetbal',
    to: 'Voetbal',
    qtd: 5
  }];

  const ads = filterNode('advertisement');
  const teamHeaderProps = createHeaderObj(teamInfo);

  return (
    <Layout location={location}>
      <Helmet title={`${siteTitle} - ${clubeName} `} />
      <div className={clubOverviewStyles.content}>
        <TeamHeaderSection {...teamHeaderProps}/>
        <ClubArticlesSection posts={teamArticles} advertisement={getAdvertisement(ads, 'lg')} />
        {!!postCarrousel?.length && <CarouselSection carousels={postCarrousel} />}
        {!!topFivePosts?.length && <TopFiveSection posts={topFivePosts} />}
        <YourChannel />
        <Newsletter />
      </div>
    </Layout>
  )
}

export default ClubOverviewTemplate

export const pageQuery = graphql`
  query ClubeOverview (
    $id: String!
  ) {
    drupal {
      club: nodeById(id: $id) {
        title
        ... on Drupal_NodeFanclub {
          cover: fieldFanclubBanner {
            alt
            url
          }
          logo: fieldFanclubLogo {
            alt
            url
          }
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
    teamInfo: markdownRemark(id: { eq: $id }) {
      fields {
        slug
      }
      frontmatter {
        title
        cover {
          childImageSharp {
            fluid(quality: 100, maxWidth: 800){
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
    allnodes: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
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
