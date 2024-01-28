import React, { ReactNode } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { TopNav } from './TopNav';
import { SideNav } from './SideNav';

export const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {


  return (
    <div>
    <TopNav/>
    <div>
        <SideNav/>
        {children}
    </div>
    
   </div>
  );
};
