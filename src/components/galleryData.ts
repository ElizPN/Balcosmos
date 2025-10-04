export interface GalleryItem {
  type: 'photo' | 'video';
  url: string;
  thumbnailUrl: string;
  title: string;
}

export const galleryData: GalleryItem[] = [
  {
    type: 'photo',
    url: 'https://i.ibb.co/qMS4p3g/balcosmos-live-1.jpg',
    thumbnailUrl: 'https://i.ibb.co/qMS4p3g/balcosmos-live-1.jpg',
    title: 'Live at Wonderland Festival',
  },
  {
    type: 'video',
    url: 'https://www.youtube.com/watch?v=F1-yJ91-g2I',
    thumbnailUrl: 'https://i.ibb.co/d260k26/youtube-thumb-1.jpg',
    title: 'Balcosmos - A New Era (Official Video)',
  },
  {
    type: 'photo',
    url: 'https://i.ibb.co/bF0Kz6c/balcosmos-live-2.jpg',
    thumbnailUrl: 'https://i.ibb.co/bF0Kz6c/balcosmos-live-2.jpg',
    title: 'Psychedelic Experience',
  },
  {
    type: 'photo',
    url: 'https://i.ibb.co/ypsh02C/balcosmos-live-3.jpg',
    thumbnailUrl: 'https://i.ibb.co/ypsh02C/balcosmos-live-3.jpg',
    title: 'On the Decks',
  },
  {
    type: 'video',
    url: 'https://www.youtube.com/watch?v=j_2aB7t2a-Q',
    thumbnailUrl: 'https://i.ibb.co/k2qZz7j/youtube-thumb-2.jpg',
    title: 'Live Set @ Forest Frequencies',
  },
  {
    type: 'photo',
    url: 'https://i.ibb.co/dGZvW4k/balcosmos-studio.jpg',
    thumbnailUrl: 'https://i.ibb.co/dGZvW4k/balcosmos-studio.jpg',
    title: 'In the Studio',
  },
];