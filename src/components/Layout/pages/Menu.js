import React from 'react'
import Layout from '../Layout'
import { Grid, Card, CardActionArea, CardMedia,CardContent, Typography } from "@mui/material"
import {MenuList} from '../../../Data/Data'
import { width } from '@mui/system';
const Menu = () => {
  return (
    <Layout>
      <Grid container sx={{ display:'flex', flexWrap:'wrap', justifyContent:'center', width:'80vw', m:'0 auto'}}>
        {MenuList.map((menu)=>(
        <Grid item xs={4}>
          <Card sx={{ maxWidth:'350px', display:'flex', m:2 }}>
          <CardActionArea>
            <CardMedia 
            sx={{minHeight:'400px'}} 
            component={'img'}  
            src={menu.Image} 
            alt ={menu.Name}
            />
            <CardContent>
              <Typography variant='h5' gutterBottom component={'div'}>
                {menu.Name}
              </Typography>
              <Typography variant='body2'>{menu.Discription}</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        </Grid>
        ))
      }
      </Grid>
    </Layout>
  );
};
export default Menu
