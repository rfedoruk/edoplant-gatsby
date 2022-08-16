import React from 'react';
import { graphql } from 'gatsby';

export default function Blog ({data}) {
  console.log(data);
  return (
  <div>
    <h1>Welcome to My Blog</h1>
    <h2>{data.wpPost.title}</h2>
    <p>{data.wpPost.content}</p>
  </div>
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