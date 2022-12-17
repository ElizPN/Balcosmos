import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import AlbomDharma from "../images/albom_dharma_endpoint.jpeg";
import AlbomMinistry from  "../images/albom_ministry_of_apparatus.jpeg";
import AlbomSacred from "../images/albom_sacred_dope.jpeg";
import AlbomSolidary from "../images/albom_solitary_oasis.jpeg";
import AlbomSolmusic from "../images/albom_solmusic.jpeg";
import AlbomSpaseBaby from "../images/albom_spase_baby.jpeg";
import AlbomWinnersGreenTree from "../images/albom_winners_greenTree.jpeg";
import AlbomWinnersSol from "../images/albom_winners_sol.jpeg";
import AlbomWinnersIono from "../images/albom_winners_iono.jpeg";

interface Albom {
  img: string;
  title: string;
}

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
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading='lazy'
       
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
