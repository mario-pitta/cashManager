import React from 'react';

import './layout.css';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { Content } from './components';

export interface layoutProps {
  prop?: string;
}

export function Layout({prop = 'default value'}: layoutProps) {
  return <div className='layout'>
    <Header />
    <Content />
    <Footer />
  
  </div>;
}
