import sliderImgOne from '../../../assets/images/corouselImg/slider_img.jpg';
import sliderImgTwo from '../../../assets/images/corouselImg/slider2.jpg';
import sliderImgTree from '../../../assets/images/corouselImg/slider3.png';

export type Diskont = {
  key: string;
  link: string;
  alt: string;
};

export const diskonts: Diskont[] = [
  { key: '1', link: sliderImgOne, alt: 'ee' },
  { key: '2', link: sliderImgTwo, alt: 'rr' },
  { key: '3', link: sliderImgTree, alt: 'tt' },

];

export type Popular = {
  key: string;
  link: string;
  alt: string;
};

export const popular: Popular[] = [
  { key: '1', link: sliderImgOne, alt: 'ee' },
  { key: '2', link: sliderImgTwo, alt: 'rr' },
  { key: '3', link: sliderImgTree, alt: 'tt' },

];
