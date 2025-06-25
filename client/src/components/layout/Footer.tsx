import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Link as MuiLink,
  Divider,
  IconButton,
} from '@mui/material';
import Link from 'next/link';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6, mt: 'auto' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Music EPK Creator
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Create professional electronic press kits to showcase your music and brand to industry professionals.
            </Typography>
            <Box sx={{ mt: 2 }}>
              <IconButton aria-label="facebook" size="small">
                <FacebookIcon fontSize="small" />
              </IconButton>
              <IconButton aria-label="twitter" size="small">
                <TwitterIcon fontSize="small" />
              </IconButton>
              <IconButton aria-label="instagram" size="small">
                <InstagramIcon fontSize="small" />
              </IconButton>
              <IconButton aria-label="linkedin" size="small">
                <LinkedInIcon fontSize="small" />
              </IconButton>
            </Box>
          </Grid>
          
          <Grid item xs={12} sm={2}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Product
            </Typography>
            <Link href="/features" passHref>
              <MuiLink color="inherit" underline="hover" display="block" mb={1}>
                Features
              </MuiLink>
            </Link>
            <Link href="/pricing" passHref>
              <MuiLink color="inherit" underline="hover" display="block" mb={1}>
                Pricing
              </MuiLink>
            </Link>
            <Link href="/examples" passHref>
              <MuiLink color="inherit" underline="hover" display="block" mb={1}>
                Examples
              </MuiLink>
            </Link>
          </Grid>
          
          <Grid item xs={12} sm={2}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Resources
            </Typography>
            <Link href="/blog" passHref>
              <MuiLink color="inherit" underline="hover" display="block" mb={1}>
                Blog
              </MuiLink>
            </Link>
            <Link href="/help" passHref>
              <MuiLink color="inherit" underline="hover" display="block" mb={1}>
                Help Center
              </MuiLink>
            </Link>
            <Link href="/guides" passHref>
              <MuiLink color="inherit" underline="hover" display="block" mb={1}>
                Guides
              </MuiLink>
            </Link>
          </Grid>
          
          <Grid item xs={12} sm={2}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Company
            </Typography>
            <Link href="/about" passHref>
              <MuiLink color="inherit" underline="hover" display="block" mb={1}>
                About Us
              </MuiLink>
            </Link>
            <Link href="/contact" passHref>
              <MuiLink color="inherit" underline="hover" display="block" mb={1}>
                Contact
              </MuiLink>
            </Link>
            <Link href="/careers" passHref>
              <MuiLink color="inherit" underline="hover" display="block" mb={1}>
                Careers
              </MuiLink>
            </Link>
          </Grid>
          
          <Grid item xs={12} sm={2}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Legal
            </Typography>
            <Link href="/privacy" passHref>
              <MuiLink color="inherit" underline="hover" display="block" mb={1}>
                Privacy Policy
              </MuiLink>
            </Link>
            <Link href="/terms" passHref>
              <MuiLink color="inherit" underline="hover" display="block" mb={1}>
                Terms of Service
              </MuiLink>
            </Link>
            <Link href="/cookies" passHref>
              <MuiLink color="inherit" underline="hover" display="block" mb={1}>
                Cookie Policy
              </MuiLink>
            </Link>
          </Grid>
        </Grid>
        
        <Divider sx={{ mt: 6, mb: 4 }} />
        
        <Typography variant="body2" color="text.secondary" align="center">
          © {new Date().getFullYear()} Music EPK Creator. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;