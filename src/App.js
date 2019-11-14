import React from 'react';
import './App.css';
import MainContent from './MainContent/MainContent'
import Nav from './Nav/Nav'
import LeftPanel from './LeftPanel/LeftPanel';


const App = () =>  {
  return(
    <section>
        <Nav />
      <div class="row">
      <div id="sidebar" class="col-sm-12 col-md-12 col-lg-4 col-lg-4 sidebar"><LeftPanel /></div>
      <div id="content" class="col-sm-12 col-md-12 col-lg-8 col-xl-8 content"><MainContent /></div>
      </div>
    
    </section>
  )
}

export default App
