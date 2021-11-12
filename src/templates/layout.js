import React from 'react'

import { library } from '@fortawesome/fontawesome-svg-core';
import * as FontawesomeIcons from '@fortawesome/free-solid-svg-icons';
import * as FontawesomeBrand from '@fortawesome/free-brands-svg-icons';
import './layout.scss'

import Footer from '../components/organisms/footer/footer'
import Header from '../components/organisms/header/header'

const iconList = Object.keys(FontawesomeIcons).filter((key) => key !== 'fas' && key !== 'prefix').map((icon) => FontawesomeIcons[icon]);
const brandList = Object.keys(FontawesomeBrand).filter((key) => key !== 'fab' && key !== 'prefix').map((icon) => FontawesomeBrand[icon]);

library.add(...iconList);
library.add(...brandList);

const Template = ({ children }) => {
  return (
    <div className="content">
      <Header />
        {children}
      <Footer />
    </div>
  )
}

export default Template
