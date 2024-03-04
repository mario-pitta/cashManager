import React from 'react';

import  './content.css';

export interface contentProps {
  prop?: string;
}

export function Content({prop = 'default value'}: contentProps) {
  console.log('iniciando content')
  return <div className='content'>content {prop}</div>;
}
