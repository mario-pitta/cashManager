import React from 'react';

import  './footer.css';

export interface footerProps {
  prop?: string;
}

export function Footer({prop = 'default value'}: footerProps) {
  return <div className='footer'>footer {prop}</div>;
}
