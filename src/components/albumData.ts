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
import AlbomFreeYourGhostages from "../images/albom_free_your.jpg";
import AlbomBetterPlanet from "../images/albom_better_planet.jpg";
import FeedYourWoolf from "../images/album_feed_woolf.jpeg";

export interface Album {
  img: string;
  title: string;
  date: string;
  label: string;
  youtube: string;
}

export const albumData: Album[] = [
  {
    img: AlbomFreeYourGhostages,
    title: "Free Your Ghostages",
    date: "Release Date: Oct 19, 2023",
    label: "Label - Spiral Trax",
    youtube:
      "https://www.youtube.com/watch?v=1Bpa4xxIs2U",
  },
  {
    img: AlbomBetterPlanet,
    title: "Better as a Planet",
    date: "Release Date: Sep 27, 2023",
    label: "Label - Fractal Records",
    youtube:
      "https://www.youtube.com/watch?v=Iu6gVZZZm68",
  },
  {
    img: FeedYourWoolf,
    title: "Feed Your Wolf",
    date: "Release Date: Nov 13, 2023",
    label: "Label - Sentimony Records",
    youtube:
      "https://www.youtube.com/watch?v=onltqi2mMK8  ",
  },

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
    youtube: "https://www.youtube.com/playlist?list=PLKf7fie1PLSay02EG9UBef25r_uyTIKL-",
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
