import React, { useState } from 'react';

import leftArrowImg from '../../../assets/icons/leftArrow.svg';
import rightArrowImg from '../../../assets/icons/rightArrow.svg';
import classes from './Carousel.module.scss';
import { Diskont } from './carouselItems';

type Props = {
  diskonts: Diskont[];
};

const Carousel: React.FC<Props> = (props) => {
  const { diskonts } = props;
  const [count, setCount] = useState(0);
  // const leftOffset = () => setCount(count - 870);
  const leftOffset = () => count < 0 ? setCount(count + 870) : setCount(-870 * (diskonts.length - 1)) ;
  // const rightOffset = () => setCount(count + 870);
  const rightOffset = () => count > -870 * (diskonts.length - 1) ? setCount(count - 870) : setCount(0) ;

  return (
    <>
      <div className={classes.component}>
        <a href="#" className={classes.leftArrow} onClick={leftOffset}>
          <img src={leftArrowImg} alt="влево" />
        </a>
        <div className={classes.line} style={{ left:`${count}px` }}>
          {diskonts.map((item) => <img key={item.key} src={item.link} alt={item.alt} />)}
        </div>
        <a href="#" className={classes.rightArrow} onClick={rightOffset}>
          <img src={rightArrowImg} alt="вправо" />
        </a>
      </div>
      <p>{count}</p>
    </>
  );
};

export default Carousel;
