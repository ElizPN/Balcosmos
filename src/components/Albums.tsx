import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import AlbomDharma from "../images/albom_dharma_endpoint.jpeg";
import AlbomMinistry from "../images/albom_ministry_of_apparatus.jpeg";
import AlbomSacred from "../images/albom_sacred_dope.jpeg";
import AlbomSolitary from "../images/albom_solitary_oasis.jpeg";
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
import { Link } from "react-router-dom";
import YouTubeLogo from "../images/youtube-logo.png";

interface Album {
  img: string;
  title: string;
  date: string;
  label: string;
  youtube: string;
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

const albomData: Album[] = [
  {
    img: AlbomDharma,
    title: "Dharma endpoint",
    date: "Released September 19, 2021",
    label: "Balcosmos",
    youtube:
      "https://www.youtube.com/playlist?list=PLKf7fie1PLSa0tsBfN2D5RwpnbFwYyN2E",
  },
  {
    img: AlbomMinistry,
    title: "Pleasure Controller",
    date: "Released November 17, 2022",
    label: "Label UP!NOIZE Records",
    youtube: "https://www.youtube.com/watch?v=WtwFV5bYviI",
  },
  {
    img: AlbomSacred,
    title: "AlbomSacred",
    date: "Released March 26, 2021",
    label: "Balcosmos",
    youtube:
      "https://www.youtube.com/playlist?list=PLKf7fie1PLSbgKS4RFN0xCLONCzlhynw8",
  },
  {
    img: AlbomSolitary,
    title: "Solitary Oasis",
    date: "Release Date: January 6 2023",
    label: "Label: GreenTree Records",
    youtube:
      "https://www.youtube.com/playlist?list=PLKf7fie1PLSa0tsBfN2D5RwpnbFwYyN2E",
  },
  {
    img: AlbomSpaseBaby,
    title: "Ringing blizzard",
    date: "Released November 10, 2021",
    label: "Space Baby Records",
    youtube: "https://www.youtube.com/watch?v=LT910zKihSQ",
  },
  {
    img: AlbomSolmusic,
    title: "Projection Of Reality ",
    date: "Released August 26, 2022",
    label: "Label: Sol Music",
    youtube:
      "https://www.youtube.com/playlist?list=PLKf7fie1PLSZalWJpEogk9yZ_yBOrbpth",
  },
  {
    img: AlbomWinnersGreenTree,
    title: "AlbomWinnersGreenTree",
    date: "19.09.2021",
    label: "Balcosmos",
    youtube:
      "https://www.youtube.com/playlist?list=PLKf7fie1PLSa0tsBfN2D5RwpnbFwYyN2E",
  },
  {
    img: AlbomWinnersSol,
    title: "Happiness Is your Decision",
    date: " Released December 26 2021",
    label: "Label: Sol Music",
    youtube: "https://www.youtube.com/watch?v=ctt1KGXUhNs",
  },
  {
    img: AlbomWinnersIono,
    title: "Insect in a Sect",
    date: "Released August 12 2021",
    label: "Label: Iono Music ",
    youtube: "https://www.youtube.com/watch?v=9GaCzajhIKw",
  },
];

export default function Albums() {
  const [open, setOpen] = React.useState(false);
  const [modalData, setModalData] = React.useState<Album | null>(null);

  // const handleOpen = () => setOpen(true);
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
            onClick={() => {
              setModalData(item);
              setOpen(true);
            }}
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading='lazy'
          />
        </ImageListItem>
      ))}

      <StyledModal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        {modalData !== null ? (
          <Box sx={style}>
            <Typography id='modal-modal-title' variant='h6' component='h2'>
              {modalData.title}
            </Typography>
            <Typography id='modal-modal-description' sx={{ mt: 2 }}>
              <img src={modalData.img} width='200' height='200' />
              <p>{modalData.date}</p>
              <p>{modalData.label}</p>
              <a href={modalData.youtube} target='_blank'>
                <img src={YouTubeLogo} width='200' height='100' />
              </a>
            </Typography>
          </Box>
        ) : (
          <div></div>
        )}
      </StyledModal>
    </ImageList>
  );
}
