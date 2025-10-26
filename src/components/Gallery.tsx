import React, { useState } from 'react';
import { galleryData, GalleryItem } from './galleryData';
import { Box, Typography, Grid, Card, CardActionArea, CardMedia, Modal, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ReactPlayer from 'react-player/youtube';

const modalStyle = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: '90%', md: '80%' },
  maxWidth: '900px',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 2,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const Gallery: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const handleOpen = (item: GalleryItem) => {
    setSelectedItem(item);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedItem(null);
  };

  return (
    <Box id="gallery" sx={{ p: 3, color: 'white', width: '90%', scrollMarginTop: '100px', mt: 4, backgroundColor: 'rgba(0, 0, 0, 0.5)', borderRadius: 2 }}>
      <Typography variant="h4" gutterBottom component="div" sx={{ fontWeight: 'bold', color: '#FFD700', textAlign: 'center', mb: 4 }}>
        Gallery
      </Typography>
      <Grid container spacing={2}>
        {galleryData.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ '&:hover': { transform: 'scale(1.05)', transition: 'transform 0.3s' } }}>
              <CardActionArea onClick={() => handleOpen(item)}>
                <CardMedia
                  component="img"
                  height="200"
                  image={item.thumbnailUrl}
                  alt={item.title}
                />
                <Box sx={{ position: 'absolute', bottom: 0, left: 0, width: '100%', bgcolor: 'rgba(0, 0, 0, 0.6)', color: 'white', p: 1 }}>
                  <Typography variant="subtitle1">{item.title}</Typography>
                </Box>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="gallery-modal-title"
      >
        <Box sx={modalStyle}>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{ position: 'absolute', top: 8, right: 8, color: 'grey.500' }}
          >
            <CloseIcon />
          </IconButton>
          {selectedItem && (
            <>
              <Typography id="gallery-modal-title" variant="h6" component="h2" sx={{ mb: 2, color: 'black' }}>
                {selectedItem.title}
              </Typography>
              {selectedItem.type === 'photo' ? (
                <img src={selectedItem.url} alt={selectedItem.title} style={{ maxWidth: '100%', maxHeight: '80vh' }} />
              ) : (
                <Box sx={{ width: '100%', height: { xs: '30vh', sm: '50vh', md: '60vh' } }}>
                  <ReactPlayer url={selectedItem.url} width="100%" height="100%" controls />
                </Box>
              )}
            </>
          )}
        </Box>
      </Modal>
    </Box>
  );
};

export default Gallery;