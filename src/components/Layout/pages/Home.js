import React, { useState } from 'react'
import Layout from '../Layout'
import { Box, Typography, Button, Stack, TextField } from "@mui/material"
// import { CommentBankTwoTone } from '@mui/icons-material'

const Home = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [mobile, setMobile] = useState()

  const showData = () => {
    console.log({ name, email, mobile })
  }

  return (
    <Layout>
      <Box className="home" sx={{
        height: '100vh',
        backgroundImage: `url('https://img.freepik.com/free-photo/top-view-circular-food-frame_23-2148723455.jpg?w=996&t=st=1692520072~exp=1692520672~hmac=ba0ce2fd533e87da28bd00ca893d10499994640bdfeb40858d00393381e25344')`, backgroundSize: 'cover'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', height: '100vh', justifyContent: 'center' }}>
          <Stack sx={{ textAlign: 'center' }}>


            <Typography variant="h4" color="#FFC300 " sx={{ fontSize: '4.5rem', fontWeight: 'bold' }}>Foodie.com</Typography>
            <Typography variant="subtitle1" color="#FFC300 " sx={{ fontSize: '3.5rem', fontWeight: 'bold' }} >Best Food In U.P</Typography>
            <Stack gap={2} sx={{ my: 2 }}>

              <TextField label="name" variant="outlined" onChange={(e) => setName(e.target.value)} />
              <TextField label="email" variant="outlined" onChange={(e) => setEmail(e.target.value)} />
              <TextField label="mobile" variant="outlined" onChange={(e) => setMobile(e.target.value)} />
            </Stack>
            {/* <Link to="/menu"> */}
            <Button variant="contained" color="success" onClick={showData}> Submit </Button>
            {/* </Link> */}
          </Stack>
        </div>

      </Box>

    </Layout>
  )
}

export default Home



