import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import AlbomDharma from "../images/albom_dharma_endpoint.jpeg";
import AlbomMinistry from "../images/albom_ministry_of_apparatus.jpeg";
import AlbomSacred from "../images/albom_sacred_dope.jpeg";
import AlbomSolidary from "../images/albom_solitary_oasis.jpeg";
import AlbomSolmusic from "../images/albom_solmusic.jpeg";
import AlbomSpaseBaby from "../images/albom_spase_baby.jpeg";
import AlbomWinnersGreenTree from "../images/albom_winners_greenTree.jpeg";
import AlbomWinnersSol from "../images/albom_winners_sol.jpeg";
import AlbomWinnersIono from "../images/albom_winners_iono.jpeg";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material";

interface Albom {
  img: string;
  title: string;
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const albomData: Albom[] = [
  { img: AlbomDharma, title: "Dharma endpoint" },
  { img: AlbomMinistry, title: "Ministry" },
  { img: AlbomSacred, title: "AlbomSacred" },
  { img: AlbomSolidary, title: "AlbomSolidary" },
  { img: AlbomSpaseBaby, title: "AlbomSpaseBaby" },
  { img: AlbomSolmusic, title: "AlbomSolmusic" },
  { img: AlbomWinnersGreenTree, title: "AlbomWinnersGreenTree" },
  { img: AlbomWinnersSol, title: "AlbomWinnersSol" },
  { img: AlbomWinnersIono, title: "AlbomWinnersIono" },
];

export default function Alboms() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const StyledModal = styled(Modal)`
    .MuiBackdrop-root {
      background-color: rgba(0, 0, 0, 0.1);
    }
  `;

  return (
    <ImageList
      sx={{ width: 1200, height: 1200 }}
      cols={3}
      rowHeight={300}
      gap={30}
    >
      {albomData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            onClick={handleOpen}
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading='lazy'
          />
          {/* <Button onClick={handleOpen}>Open modal</Button> */}
          <StyledModal
            open={open}
            onClose={handleClose}
            aria-labelledby='modal-modal-title'
            aria-describedby='modal-modal-description'
          >
            <Box sx={style}>
              <Typography id='modal-modal-title' variant='h6' component='h2'>
                Text in a modal
              </Typography>
              <Typography id='modal-modal-description' sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </Typography>
            </Box>
          </StyledModal>
        </ImageListItem>
      ))}
    </ImageList>
  );
}
