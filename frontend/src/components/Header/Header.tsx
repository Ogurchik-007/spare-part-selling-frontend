import React from 'react';
import classes from './Header.module.scss';
import logo from '../../assets/images/logo.png';
import arrow from '../../assets/images/arrow.png';
import favorites from '../../assets/images/favorites.png';
import personalArea from '../../assets/images/personalArea.png';
import basket from '../../assets/images/basket.png';

const Header = (): JSX.Element => {
  return (
    <header className={classes.header}>
      <div className={classes.headerTop}>
        <section className={classes.basicInformation}>
          <a className={classes.basicInformationItem} href="header">Магазины</a>
          <a className={classes.basicInformationItem} href="header">Акции</a>  
          <a className={classes.basicInformationItem} href="header">Доставка и оплата</a>
        </section>
        <section className={classes.logo}>
            <img className={classes.logoImg} src={ logo } alt="логотип" />
          </section>
        <section className={classes.address}>
          <img className={classes.addressImg} src={arrow} alt="" />
          <span className={classes.addressText}>
            Санке-Петербур, ул Большая Конюшенная, д 19
          </span>
        </section>
        <section className={classes.consumersCorner}>
          <img className={classes.consumersCornerImg} src={favorites} alt="Избранное" />
          <img className={classes.consumersCornerImg} src={personalArea} alt="Личгый кабинет" />
          <img className={classes.consumersCornerImg} src={basket} alt="Корзина" />
        </section>
      </div>

      <div className= {classes.headerBottom}>
        <nav className={classes.nav}>
          <a className={classes.navItem} href="header">Каталог Запчестей</a>
          <a className={classes.navItem} href="header">Каталог ТО</a>
          <a className={classes.navItem} href="header">Шины</a>
          <a className={classes.navItem} href="header">Диски</a>
          <a className={classes.navItem} href="header">Аккумуляторы</a>
          <a className={classes.navItem} href="header">Автомасла</a>
          <a className={classes.navItem} href="header">Автолампы</a>
          <a className={classes.navItem} href="header">Аксессуары</a>
        </nav>
      </div>
    </header>
  );
}
  
  export default Header;
  