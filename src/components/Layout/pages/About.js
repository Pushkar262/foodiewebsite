import React from 'react'
import Layout from '../Layout'
import { Typography, Box } from "@mui/material"

const About = () => {
  return (
    <Layout>
      <Box sx={{
        textAlign: "center",
        p: 5,
        "& h4":{
          my: 2,
          fontSize:'2rem',
        },
        "& p":{
          textAlign:"justify",
          color:"white",
          fontSize:"1.2rem"
        },
        backgroundColor:"gray",
        height:'75vh'
      }}>
      <Typography variant='h3' color="yellow">
        Welcome to Foodie 
      </Typography>
      <br/>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum incidunt doloribus, sequi laboriosam beatae impedit aliquam obcaecati doloremque rem voluptate. Facere deleniti quaerat rerum laborum sed quam nulla et a earum, corrupti aliquid illum at eveniet quis eum laudantium eos mollitia, dicta reiciendis fugiat aperiam eaque. Incidunt magnam amet fugit dolor aliquid dignissimos, dolore, asperiores voluptatem autem quaerat ad exercitationem nisi reiciendis rerum rem iste! Pariatur in impedit voluptas facilis omnis consectetur, temporibus quod, veniam unde totam quisquam ipsum libero laboriosam velit deserunt culpa ratione placeat accusamus maxime illum dignissimos! Blanditiis, nesciunt eaque corrupti temporibus hic neque non voluptates quisquam?</p>
      <br/>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. At ab numquam error veniam, nisi porro odit, quam voluptates earum maiores ipsam dolores minus voluptatibus voluptas officiis cum reprehenderit recusandae quidem tempora? Laudantium vitae reprehenderit in sint nam obcaecati deserunt sapiente quaerat assumenda fuga debitis illo, velit ipsa neque? Totam veniam quaerat inventore molestias ipsa voluptatem officia explicabo aliquid repellat reprehenderit, hic quam alias sit cumque amet quidem nihil numquam suscipit molestiae. Maiores laboriosam, minima cum enim totam optio quae temporibus dolores, incidunt perferendis dolore quis! Voluptate dolore quis ratione vero, fugiat reiciendis nemo amet magni sapiente, perferendis corrupti enim eligendi!
      </p>

      </Box>
    </Layout>
  )
}

export default About
