import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';


const Post = ({data}) => {
    return (
        <Layout>
            <h1>{data.wpPost.title}</h1>
            <div dangerouslySetInnerHTML={{__html: data.wpPost.content}}/>
        </Layout>
    );
}

export default Post;

export const postQuery = graphql`
    query($id: String!){
        wpPost(id: {eq: $id}){
            id
            content
            title
            author{
                node{
                    name
                }
            }
        }
    }
`

// wpPost {
//     author {
//       node {
//         name
//       }
//     }
//     content
//   }