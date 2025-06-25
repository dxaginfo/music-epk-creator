import React from 'react';
import { Typography, Container, Button, Box, Grid, Paper } from '@mui/material';
import Link from 'next/link';
import styled from 'styled-components';

const HeroSection = styled.div`
  padding: 80px 0;
  text-align: center;
  background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
  color: white;
`;

const FeatureCard = styled(Paper)`
  padding: 24px;
  height: 100%;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  }
`;

export default function Home() {
  return (
    <>
      <HeroSection>
        <Container maxWidth="md">
          <Typography variant="h2" component="h1" gutterBottom>
            Create Professional Press Kits for Musicians
          </Typography>
          <Typography variant="h5" component="p" paragraph>
            Showcase your music and brand with customizable electronic press kits
          </Typography>
          <Box mt={4}>
            <Button 
              variant="contained" 
              color="secondary" 
              size="large"
              component={Link}
              href="/signup"
              sx={{ mr: 2 }}
            >
              Get Started
            </Button>
            <Button 
              variant="outlined" 
              color="inherit" 
              size="large"
              component={Link}
              href="/examples"
            >
              See Examples
            </Button>
          </Box>
        </Container>
      </HeroSection>
      
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h3" component="h2" align="center" gutterBottom>
          Features
        </Typography>
        
        <Grid container spacing={4} sx={{ mt: 4 }}>
          <Grid item xs={12} sm={6} md={4}>
            <FeatureCard elevation={2}>
              <Typography variant="h5" component="h3" gutterBottom>
                Customizable Templates
              </Typography>
              <Typography color="textSecondary">
                Choose from professionally designed templates specifically created for musicians and bands.
              </Typography>
            </FeatureCard>
          </Grid>
          
          <Grid item xs={12} sm={6} md={4}>
            <FeatureCard elevation={2}>
              <Typography variant="h5" component="h3" gutterBottom>
                Media Integration
              </Typography>
              <Typography color="textSecondary">
                Easily embed audio tracks, videos, and high-resolution photos to showcase your work.
              </Typography>
            </FeatureCard>
          </Grid>
          
          <Grid item xs={12} sm={6} md={4}>
            <FeatureCard elevation={2}>
              <Typography variant="h5" component="h3" gutterBottom>
                Analytics & Tracking
              </Typography>
              <Typography color="textSecondary">
                Know who's viewing your press kit with detailed analytics on engagement and location.
              </Typography>
            </FeatureCard>
          </Grid>
          
          <Grid item xs={12} sm={6} md={4}>
            <FeatureCard elevation={2}>
              <Typography variant="h5" component="h3" gutterBottom>
                Distribution Tools
              </Typography>
              <Typography color="textSecondary">
                Share your press kit via email, social media, or downloadable PDFs with a single click.
              </Typography>
            </FeatureCard>
          </Grid>
          
          <Grid item xs={12} sm={6} md={4}>
            <FeatureCard elevation={2}>
              <Typography variant="h5" component="h3" gutterBottom>
                Mobile Responsive
              </Typography>
              <Typography color="textSecondary">
                Your press kit looks great on all devices, ensuring industry professionals can view it anywhere.
              </Typography>
            </FeatureCard>
          </Grid>
          
          <Grid item xs={12} sm={6} md={4}>
            <FeatureCard elevation={2}>
              <Typography variant="h5" component="h3" gutterBottom>
                Third-Party Integration
              </Typography>
              <Typography color="textSecondary">
                Connect with Spotify, Bandcamp, SoundCloud, and other music platforms to enhance your press kit.
              </Typography>
            </FeatureCard>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}