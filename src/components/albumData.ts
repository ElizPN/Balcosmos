import albumDharma from "../images/album_dharma_endpoint.jpeg";
import albumMinistry from "../images/album_ministry_of_apparatus.jpeg";
import albumSacred from "../images/album_sacred_dope.jpeg";
import albumSolitary from "../images/album_solitary_oasis.jpeg";
import albumSolmusic from "../images/album_solmusic.jpeg";
import albumSpaseBaby from "../images/album_spase_baby.jpeg";
import MemoryHeap from "../images/memory-heapCove.jpg";
import albumWinnersSol from "../images/album_happiness.jpeg";
import albumWinnersIono from "../images/sub_iono.jpg";
import AlbumGrovemaster from "../images/album_galactic_grovemaster.jpg";
import AlbumLoveUkraine from "../images/album_peace_love_ukraine.jpg";
import AlbumTurnMeOn from "../images/album_turn_me_on.jpg";
import AlbumUniverseBeyond from "../images/album_universe_beyond.jpg";
import albumFreeYourGhostages from "../images/album_free_your.jpg";
import albumBetterPlanet from "../images/album_better_planet.jpg";
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
    img: albumFreeYourGhostages,
    title: "Free Your Ghostages",
    date: "Release Date: Oct 19, 2023",
    label: "Label - Spiral Trax",
    youtube:
      "https://www.youtube.com/watch?v=1Bpa4xxIs2U",
  },
  {
    img: albumBetterPlanet,
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
    img: albumDharma,
    title: "Dharma endpoint",
    date: "Release Date: September 19, 2021",
    label: "Label - Balcosmos",
    youtube:
      "https://www.youtube.com/playlist?list=PLKf7fie1PLSa0tsBfN2D5RwpnbFwYyN2E",
  },

  {
    img: albumSolitary,
    title: "Solitary Oasis",
    date: "Release Date: January 6 2023",
    label: "Label - GreenTree Records",
    youtube:
      "https://www.youtube.com/playlist?list=PLKf7fie1PLSa0tsBfN2D5RwpnbFwYyN2E",
  },
  {
    img: albumSacred,
    title: "albumSacred",
    date: "Released March 26, 2021",
    label: "Label - Balcosmos",
    youtube:
      "https://www.youtube.com/playlist?list=PLKf7fie1PLSbgKS4RFN0xCLONCzlhynw8",
  },
  {
    img: albumMinistry,
    title: "Pleasure Controller",
    date: "Released November 17, 2022",
    label: "Label - UP!NOIZE Records",
    youtube: "https://www.youtube.com/watch?v=WtwFV5bYviI",
  },
  {
    img: albumSpaseBaby,
    title: "Ringing blizzard",
    date: "Released November 10, 2021",
    label: "Label - Space Baby Records",
    youtube: "https://www.youtube.com/playlist?list=PLKf7fie1PLSay02EG9UBef25r_uyTIKL-",
  },
  {
    img: albumSolmusic,
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
    img: albumWinnersSol,
    title: "Happiness Is your Decision",
    date: " Released December 26 2021",
    label: "Label - Sol Music",
    youtube: "https://www.youtube.com/watch?v=ctt1KGXUhNs",
  },
  {
    img: albumWinnersIono,
    title: "Insect in a Sect",
    date: "Released August 12 2021",
    label: "Label - Iono Music ",
    youtube: "https://www.youtube.com/watch?v=9GaCzajhIKw",
  },
];
