import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from './img/Logo.png';
import './styles.scss';

class MenuGeneral extends Component {
  state = {
    collapsed: false,
  };

  render() {
    return (
      <nav className='menu__contenedor'>
        <div className='menu__img'><img src={Logo}/></div>
        <h4>Mi Librería</h4>
        <ul>
          <li>
            <Link>Recientess</Link>
          </li>
          <li>
            <Link>Artistas</Link>
          </li>
          <li>
            <Link>Álbums</Link>
          </li>
          <li>
            <Link>Canciones</Link>
          </li>
          <li>
            <Link>Estaciones</Link>
          </li>
        </ul>
        <h4>Playlist</h4>
        <ul>
          <li>
            <Link>Metal</Link>
          </li>
          <li>
            <Link>Para bailar</Link>
          </li>
          <li>
            <Link>Rock 90s</Link>
          </li>
          <li>
            <Link>Baladas</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default MenuGeneral;