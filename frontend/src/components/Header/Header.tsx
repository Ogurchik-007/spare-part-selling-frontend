import React from 'react';
import classes from './Header.module.scss';
import logo from '../../assets/images/logo.png';

const Header = () => {
    return (
      <div className={ classes.header }>
        <div className={ classes.headerTop }>
          <section className={ classes.basicInformation}>
            <a className={ classes.basicInformationItem } href="header">Магазины</a>
            <a className={ classes.basicInformationItem  } href="header">Акции</a>  
            <a className={ classes.basicInformationItem  } href="header">Доставка и оплата</a>
          </section>
          <section className={ classes.logo }>
             <img className={ classes.logoImg } src={ logo } alt="логотип" />
            </section>
          <section className={ classes.address }>
            <img className={ classes.addressImg } src="" alt="" />
            <p></p>
            <p></p>
          </section>
          <section className={ classes.consumersCorner }>

          </section>
        </div>

        <div className= { classes.headerBottom }>
          <nav className={ classes.nav }>

          </nav>
        </div>
      </div>
    );
  }
  
  export default Header;