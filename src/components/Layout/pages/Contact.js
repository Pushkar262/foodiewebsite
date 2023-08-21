import React from 'react';
import Layout from '../Layout';
import { Box, Typography, Stack } from "@mui/material";
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Contact = () => {
  return (
    <Layout>
      <Box sx={{ m: 3, height:'70vh' }}>
        <Typography variant="h4" sx={{ marginBottom: '20px', fontWeight: 'bold' }}>
          Contact Foodie
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: '20px' }}>
        We value your feedback and inquiries! If you have any questions about our delectable dishes, menu options, catering services, or anything else related to our culinary offerings, please feel free to get in touch with us. Our dedicated customer support team is here to assist you. You can reach us through the following channels:
        </Typography>

        <Typography variant="body1" sx={{ marginBottom: '20px' }}>
        Phone: For immediate assistance, give us a call at [Phone Number]. Our friendly representatives are available [Operating Hours] to address your queries.
        </Typography>

        <Typography variant="body1" sx={{ marginBottom: '20px' }}>
        Email: Have a detailed inquiry or suggestion? Write to us at [Email Address], and we'll get back to you within [Response Timeframe] with a thoughtful response.
        </Typography>

        <Typography variant="body1" sx={{ marginBottom: '20px' }}>
        Social Media: Stay connected with us on our social media platforms. Feel free to drop a message or comment on our [Facebook/Instagram/Twitter] page, and we'll be sure to respond.
        </Typography>

        <Typography
          variant='h4'
          sx={{
            bgcolor: 'black',
            color: 'white',
            py: '10px',
            textAlign: 'center',
            borderRadius: '5px',
          }}
        >
          Contact details
        </Typography>
        
        {[
          { Icon: SupportAgentIcon, color: 'red', text: '1800-00-0000' },
          { Icon: MailIcon, color: 'blue', text: 'foodie@gmail.com' },
          { Icon: CallIcon, color: 'red', text: '+91 9595009595' },
          { Icon: WhatsAppIcon, color: 'green',text: 'https://web.whatsapp.com/'},
        ].map((item, index) => (
          <Stack
            key={index}
            direction={'row'}
            pt="20px"
            sx={{ ml: '20px', alignItems: 'center' }}
          >
            <item.Icon sx={{ color: item.color }} fontSize="small" />
            <Typography
              color={item.color}
              sx={{ marginLeft: '10px', fontSize: '14px' }}
              component="a"
              href={item.text}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.text}
            </Typography>
          </Stack>
        ))}
      </Box>
    </Layout>
  );
};

export default Contact;

