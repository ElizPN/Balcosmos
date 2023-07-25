import * as React from "react";
import AlbomDharma from "../images/albom_dharma_endpoint.jpeg";
import AlbomMinistry from "../images/albom_ministry_of_apparatus.jpeg";
import AlbomSacred from "../images/albom_sacred_dope.jpeg";
import AlbomSolitary from "../images/albom_solitary_oasis.jpeg";
import AlbomSolmusic from "../images/albom_solmusic.jpeg";
import AlbomSpaseBaby from "../images/albom_spase_baby.jpeg";
import MemoryHeap from "../images/memory-heapCove.jpg";
import AlbomWinnersSol from "../images/albom_happiness.jpeg";
import AlbomWinnersIono from "../images/sub_iono.jpg";
import AlbumGrovemaster from "../images/album_galactic_grovemaster.jpg";
import AlbumLoveUkraine from "../images/album_peace_love_ukraine.jpg";
import AlbumTurnMeOn from "../images/album_turn_me_on.jpg";
import AlbumUniverseBeyond from "../images/album_universe_beyond.jpg";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button, Unstable_Grid2, styled, Link } from "@mui/material";
import "../App.css";
import YouTubeIcon from "@mui/icons-material/YouTube";

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
  width: { xs: "90%", md: "50%", lg: "35%" },
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: "0px 0px 20px rgba(238, 231, 231, 0.855)",
  pt: 10,
  pl: 15,
  p: 10,
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

const albomData: Album[] = [
  {
    img: AlbumUniverseBeyond,
    title: "The Universe Beyond",
    date: "Release Date: May 11, 2023",
    label: "Label - Sol Music",
    youtube:
      "https://www.youtube.com/watch?v=4erMKmKIGC8&list=PLKf7fie1PLSbx8UpA3_o_9KPKT7DK3iQw&index=2",
  },
  {
    img: AlbumLoveUkraine,
    title: "KimON",
    date: "Release Date: May 12, 2023",
    label: "Label - Skygravity records",
    youtube: " https://www.youtube.com/watch?v=h_UlZpQy7mA",
  },
  {
    img: AlbumGrovemaster,
    title: "Galactic Groovemaster",
    date: "Release Date: March 31, 2023",
    label: "Label - Spiral Trax",
    youtube: "https://www.youtube.com/watch?v=ZIX21g6lsQU",
  },
  {
    img: AlbomDharma,
    title: "Dharma endpoint",
    date: "Release Date: September 19, 2021",
    label: "Label - Balcosmos",
    youtube:
      "https://www.youtube.com/playlist?list=PLKf7fie1PLSa0tsBfN2D5RwpnbFwYyN2E",
  },

  {
    img: AlbomSolitary,
    title: "Solitary Oasis",
    date: "Release Date: January 6 2023",
    label: "Label - GreenTree Records",
    youtube:
      "https://www.youtube.com/playlist?list=PLKf7fie1PLSa0tsBfN2D5RwpnbFwYyN2E",
  },
  {
    img: AlbomSacred,
    title: "AlbomSacred",
    date: "Released March 26, 2021",
    label: "Label - Balcosmos",
    youtube:
      "https://www.youtube.com/playlist?list=PLKf7fie1PLSbgKS4RFN0xCLONCzlhynw8",
  },
  {
    img: AlbomMinistry,
    title: "Pleasure Controller",
    date: "Released November 17, 2022",
    label: "Label - UP!NOIZE Records",
    youtube: "https://www.youtube.com/watch?v=WtwFV5bYviI",
  },
  {
    img: AlbomSpaseBaby,
    title: "Ringing blizzard",
    date: "Released November 10, 2021",
    label: "Label - Space Baby Records",
    youtube: "https://www.youtube.com/watch?v=LT910zKihSQ",
  },
  {
    img: AlbomSolmusic,
    title: "Projection Of Reality ",
    date: "Released August 26, 2022",
    label: "Label - Sol Music",
    youtube:
      "https://www.youtube.com/playlist?list=PLKf7fie1PLSZalWJpEogk9yZ_yBOrbpth",
  },
  {
    img: AlbumTurnMeOn,
    title: "Turn Me On",
    date: "Release Date: May 26, 2023",
    label: "Label - Spiral Trax",
    youtube: "https://youtu.be/6uT0PK7YdzM",
  },

  {
    img: MemoryHeap,
    title: "Memory heap",
    date: "Released February 3, 2023",
    label: "Label - Interface Records",
    youtube:
      "https://soundcloud.com/balcosmos/balcosmos-balcosmos-memory-heap-interface-records",
  },
  {
    img: AlbomWinnersSol,
    title: "Happiness Is your Decision",
    date: " Released December 26 2021",
    label: "Label - Sol Music",
    youtube: "https://www.youtube.com/watch?v=ctt1KGXUhNs",
  },
  {
    img: AlbomWinnersIono,
    title: "Insect in a Sect",
    date: "Released August 12 2021",
    label: "Label - Iono Music ",
    youtube: "https://www.youtube.com/watch?v=9GaCzajhIKw",
  },
];

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
        {albomData.map((item) => (
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
              <Typography id='modal-modal-title' variant='h4' component='h2'>
                {modalData.title}
              </Typography>
              <Typography
                id='modal-modal-description'
                sx={{ mt: 2 }}
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
