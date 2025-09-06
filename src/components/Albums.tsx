import * as React from "react";
import { albumData, Album } from './albumData';
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button, Unstable_Grid2, styled } from "@mui/material";
import "../App.css";
import YouTubeIcon from "@mui/icons-material/YouTube";
import CloseIcon from '@mui/icons-material/Close';



const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "90%", md: "70%", lg: "60%" },
  maxWidth: "800px",
  maxHeight: { xs: "90vh", md: "80vh" },
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: "0px 0px 20px rgba(238, 231, 231, 0.855)",
  p: 1,
  cursor: "pointer",
  mt: "10px",
  display: "flex",
  flexDirection: "column",
  overflow: "auto"
};

const StyledImg = styled("img")(() => ({
  "&:hover": {
    boxShadow: "0px 0px 20px rgba(238, 231, 231, 0.855)",
    cursor: "pointer",
  },
}));

const StyledBoxContainer = styled(Box)(() => ({
  backgroundColor: "#000000cf",
  scrollMarginTop: "500px",
  width: "90%",
  paddingTop: 20,
  paddingBottom: 30,
  paddingLeft: 35,
  paddingRight: 35,
  marginTop: 200,
  textAlign: "center",
}));

const StyledTypography = styled(Typography)(() => ({
  fontWeight: "bold",
  paddingTop: 15,
}));

const StyledGridContainer = styled(Unstable_Grid2)(() => ({
  backgroundColor: "#000000cf",
  marginTop: 25,
}));
const StyledGridItem = styled(Unstable_Grid2)(() => ({}));



const StyledModal = styled(Modal)`
  .MuiBackdrop-root {
    background-color: rgba(0, 0, 0, 0.7);
  }
`;

const getYouTubeEmbedUrl = (url: string): string => {
  try {
    const urlObj = new URL(url);
    if (urlObj.hostname === 'www.youtube.com' || urlObj.hostname === 'youtu.be') {
      const videoId = urlObj.searchParams.get('v');
      const listId = urlObj.searchParams.get('list');
      if (videoId) {
        return `https://www.youtube.com/embed/${videoId}${listId ? `?list=${listId}` : ''}`;
      } else if (listId) {
        return `https://www.youtube.com/embed/videoseries?list=${listId}`;
      }
    }
    // Fallback for youtu.be short links
    if (urlObj.hostname === 'youtu.be') {
      const videoId = urlObj.pathname.slice(1);
      return `https://www.youtube.com/embed/${videoId}`;
    }
  } catch (e) {
    console.error('Invalid YouTube URL:', url);
  }
  return '';
};

export default function Albums() {
  const [open, setOpen] = React.useState(false);
  const [modalData, setModalData] = React.useState<Album | null>(null);

  const handleClose = () => setOpen(false);

  return (
    <StyledBoxContainer id='releases'>
      <StyledTypography variant='h5'>RELEASES</StyledTypography>
      <StyledGridContainer container spacing={5}>
        {albumData.map((item) => (
          <StyledGridItem xs={12} sm={12} md={6} lg={4} key={item.img}>
            <StyledImg
              onClick={() => {
                setModalData(item);
                setOpen(true);
              }}
              src={item.img}
              srcSet={item.img}
              alt={item.title}
              loading='lazy'
              width='100%'
              height='100%'
            />
          </StyledGridItem>
        ))}
        <StyledModal
          open={open}
          onClose={handleClose}
          aria-labelledby='modal-modal-title'
          aria-describedby='modal-modal-description'
        >
          {modalData !== null ? (
            <Box sx={style}>
              <Box onClick={handleClose} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <CloseIcon />
              </Box>
              <Typography id='modal-modal-title' variant='h4' component='h2' margin="40px">
                {modalData.title}
              </Typography>
              <Typography
                id='modal-modal-description'
                sx={{ mt: 2, mb: 6, ml: 5, mr: 5 }}
                variant='h6'
              >
                <Box sx={{ height: { xs: 250, md: 400 } }}>
                  <iframe
                    src={getYouTubeEmbedUrl(modalData.youtube)}
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={modalData.title}
                  ></iframe>
                </Box>
  <p>Release Date: {modalData.date}</p>
  <p>Label - {modalData.label}</p>
  <Button
    color='inherit'
    href={modalData.youtube}
    target='_blank'
    variant='outlined'
    startIcon={<YouTubeIcon />}
  >
    Listen on YouTube
  </Button>
              </Typography>
            </Box>
          ) : (
            <div></div>
          )}
        </StyledModal>
      </StyledGridContainer>
    </StyledBoxContainer>
  );
}
