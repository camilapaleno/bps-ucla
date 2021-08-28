import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import { Helmet } from 'react-helmet';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/pages/Home';
import Mission from './components/pages/Mission';
import Philosophy from './components/pages/Philosophy';
import People from './components/pages/People';
import Recruitment from './components/pages/Recruitment';
import Contact from './components/pages/Contact';

function App() {
  return (
    <>
      <Helmet>
      <title>Camila Paleno</title>

      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest"/>
      <script src="https://kit.fontawesome.com/e1ca0213f0.js" crossorigin="anonymous"></script>

      <meta property="og:image" content="/"/>
      <meta name="description" content="Clean and modern website design and development for your business." />
      <meta property="og:title" content="Web Design and Development"/>
      <meta property="og:url" content="https://www.imcamila.com" />
      <meta property="og:description" content="Clean and modern website design and development for your business." />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
      </Helmet>

      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/" exact component={Mission}/>
          <Route path="/" exact component={Philosophy}/>
          <Route path="/" exact component={People}/>
          <Route path="/" exact component={Recruitment}/>
          <Route path="/" exact component={Contact}/>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
