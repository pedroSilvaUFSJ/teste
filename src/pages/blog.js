import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

import * as blogIndexStyles from './blog.module.scss'
import Layout from '../templates/layout'
import ArticlePreview from '../components/molecules/article-preview/article-preview'

import image from '../images/profile-pic.png';

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout location={location}>
      <div style={{ background: '#fff' }}>
        <Helmet title={siteTitle} />
        <div className={blogIndexStyles.hero}>Blog</div>
        <div className="wrapper">
          <h2 className="section-headline">Recent articles</h2>
          <ul className="article-list">
            {posts.map(({ fields, frontmatter }) => (
              <ArticlePreview
                title={frontmatter.title}
                date={frontmatter.date}
                author={frontmatter.author}
                slug={fields.slug}
                img={image}
              />
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          author
        }
      }
    }
  }
`
