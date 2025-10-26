import React from 'react';
import { merchData, MerchItem } from './merchData';
import { Box, Typography, Grid, Card, CardContent, CardMedia, Button, CardActions } from '@mui/material';

const Merch: React.FC = () => {
  return (
    <Box id="merch" sx={{ p: 3, color: 'white', width: '90%', scrollMarginTop: '100px', mt: 4, backgroundColor: 'rgba(0, 0, 0, 0.5)', borderRadius: 2 }}>
      <Typography variant="h4" gutterBottom component="div" sx={{ fontWeight: 'bold', color: '#FFD700', textAlign: 'center', mb: 4 }}>
        Merchandise
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {merchData.map((item: MerchItem, index: number) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Card sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              color: 'white',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '100%'
            }}>
              <CardMedia
                component="img"
                height="200"
                image={item.imageUrl}
                alt={item.name}
                sx={{ objectFit: 'contain', pt: 2 }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h6" component="div">
                  {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ color: 'lightgray' }}>
                  ${item.price.toFixed(2)}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'center', pb: 2 }}>
                <Button
                  size="small"
                  variant="contained"
                  sx={{
                    backgroundColor: '#FFD700',
                    color: 'black',
                    '&:hover': {
                      backgroundColor: '#FFC700',
                    },
                  }}
                >
                  Buy Now
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Merch;