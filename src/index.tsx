import {createRoot} from 'react-dom/client';
import React, { useContext, useState } from "react";
import {App} from './App';
import {BrowserRouter as Router} from 'react-router-dom';


function Root() {
 


  return (
   
      
    <Router><App /></Router>
        
  );
}

const rootElement = document.getElementById('root');
const root = createRoot(rootElement!);// createRoot(container!) if you use TypeScript
root.render(<Root />);