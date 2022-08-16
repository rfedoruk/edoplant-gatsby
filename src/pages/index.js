import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

export default function Blog ({data}) {
  console.log(data);
  return (
    <Layout>
      <h1>Welcome to My Blog</h1>
      <h2>{data.wpPost.title}</h2>
      <p>{data.wpPost.content}</p>
    </Layout>
  )
}

export const pageQuery = graphql`
query MyQuery {
  wpPost(databaseId: {eq: 1}) {
    title
    content
  }
}
` 