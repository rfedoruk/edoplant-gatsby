import React from 'react';
import Layout from '../components/layout';

import { graphql } from 'gatsby';


const CategoryPage = ({data}) => {
    console.log("test");
    console.log(data);
    return (
        <Layout>
            <h1>{data.wpCategory.name}</h1>
            <ul>
                {data.wpCategory.posts.nodes.map(ele => {
                    return <li>{ele.title}</li>
                })}
            </ul>
        </Layout>
    );
}

export default CategoryPage;

export const pageQuery = graphql`
    query($id: String!) {
        wpCategory(id: { eq: $id }) {
        id
        name
        posts {
            nodes {
            id
            title
            }
        }
        }
    }
`