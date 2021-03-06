import { Link } from 'gatsby'
import React from 'react'
import { Image, Layout, SEO } from '../components'

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      description="Home"
      keywords={[`gatsby`, `application`, `react`]}
    />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div
      data-testid="gatsby-logo"
      style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}
    >
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
