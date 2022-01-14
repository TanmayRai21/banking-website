import React from 'react';
import { HeaderContent } from '../Header-content';
import { Navigation } from '../Navigation';
import './styles.scss';

export const Header = () => {
    return (
      <div className="header">
        <div className="header__content">
          <Navigation />
          <HeaderContent />
        </div>
      </div>
    );
}


