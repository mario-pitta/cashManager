import React from 'react';

import './layout.css';
import { Content, Sidebar, Header, Footer } from './components';

export interface layoutProps {
  prop?: string;
}

export function Layout({prop = 'default value'}: layoutProps) {
  return <div className='layout'>
    <Header />
    <Sidebar />
    <Content />
    <Footer />
  
  </div>;
}
