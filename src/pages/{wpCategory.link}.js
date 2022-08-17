import React from 'react';
import Layout from '../components/layout';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import ButtonBase from '@mui/material/ButtonBase';
import { CardActionArea } from '@mui/material';


import { graphql } from 'gatsby';


const CategoryPage = ({data}) => {
    console.log("test");
    console.log(data);
    return (
        <Layout>
            <h1>{data.wpCategory.name}</h1>
                {data.wpCategory.posts.nodes.map(ele => {
                    return (
                        <Card sx={{maxWidth: 345}} key={ele.id}>
                            <CardActionArea href={ele.link}>
                                <CardHeader title={ele.title} subheader="Subheader"/>
                                <CardContent>
                                    Card Content
                                </CardContent>
                            </CardActionArea>
                        </Card> 
                    )
                })}

            
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
                link
            }
        }
        }
    }
`