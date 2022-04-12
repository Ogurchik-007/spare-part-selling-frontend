import React from 'react';

import classes from './Header.module.scss';
import logo from '../../assets/images/logo.png';
import arrow from '../../assets/images/arrow.png';
import favorites from '../../assets/images/favorites.svg';
import personalArea from '../../assets/images/personalArea.svg';
import basket from '../../assets/images/basket.svg';

const Header = (): JSX.Element => {
  return (

    <header className={classes.header}>
      <div className={classes.headerTop}>
        <section className={classes.basicInformation}>
          <a href="header">Магазины</a>
          <a href="header">Акции</a>  
          <a href="header">Доставка и оплата</a>
        </section>
        <section className={classes.logo}>
            <img src={ logo } alt="логотип" />
          </section>
        <section className={classes.address}>
          <img src={arrow} alt="" />
          <span>
            Санкт-Петербург, ул Большая Конюшенная, д 19
          </span>
        </section>
        <section className={classes.consumersCorner}>
          <a href="header"><img src={favorites} alt="Избранное" /></a>
          <a href="header"><img src={personalArea} alt="Личгый кабинет" /></a>
          <a href="header"><img src={basket} alt="Корзина" /></a>
        </section>
      </div>

      <div className= {classes.headerBottom}>
        <nav className={classes.nav}>
          <a href="header">Каталог Запчестей</a>
          <a href="header">Каталог ТО</a>
          <a href="header">Шины</a>
          <a href="header">Диски</a>
          <a href="header">Аккумуляторы</a>
          <a href="header">Автомасла</a>
          <a href="header">Автолампы</a>
          <a href="header">Аксессуары</a>
        </nav>
      </div>
    </header>
  );
}
  
  export default Header;
  