import * as React from "react";
import { albumData, Album } from './albumData';
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button, Unstable_Grid2, styled, Link } from "@mui/material";
import "../App.css";
import YouTubeIcon from "@mui/icons-material/YouTube";
import CloseIcon from '@mui/icons-material/Close';



const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "90%", md: "50%", lg: "35%" },
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: "0px 0px 20px rgba(238, 231, 231, 0.855)",
  pt: 1,
  pl: 1,
  cursor: "pointer",
  mt: "10px"
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
              <Box onClick={handleClose}>
              <CloseIcon/>
              </Box>
              <Typography id='modal-modal-title' variant='h4' component='h2' margin="40px">
                {modalData.title}
              </Typography>
              <Typography
                id='modal-modal-description'
                sx={{ mt: 2, mb: 6, ml: 5, mr: 5 }}
                variant='h6'
              >
                <Link href={modalData.youtube}>
                  <StyledImg
                    src={modalData.img}
                    sx={{
                      width: {
                        xs: "100%",
                        s: "400px",
                        md: "100%",
                        lg: "400px",
                      },
                    }}
                  />
                </Link>
                <p>{modalData.date}</p>
                <p>{modalData.label}</p>
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
