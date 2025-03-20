import React, { useState, useEffect } from 'react';
import './App.css'; // Import your CSS file here

const App = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 700);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 700);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="App">
      <a href="#main-content" className="skip-link">Skip to main content</a>

      <button 
        id="open-sidebar-button" 
        onClick={openSidebar} 
        aria-label="open sidebar" 
        aria-expanded={isSidebarOpen ? 'true' : 'false'}
        aria-controls="navbar"
        style={{ display: isMobile ? 'block' : 'none' }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#c9c9c9">
          <path d="M165.13-254.62q-10.68 0-17.9-7.26-7.23-7.26-7.23-18t7.23-17.86q7.22-7.13 17.9-7.13h629.74q10.68 0 17.9 7.26 7.23 7.26 7.23 18t-7.23 17.87q-7.22 7.12-17.9 7.12H165.13Zm0-200.25q-10.68 0-17.9-7.27-7.23-7.26-7.23-17.99 0-10.74 7.23-17.87 7.22-7.13 17.9-7.13h629.74q10.68 0 17.9 7.27 7.23 7.26 7.23 17.99 0 10.74-7.23 17.87-7.22 7.13-17.9 7.13H165.13Zm0-200.26q-10.68 0-17.9-7.26-7.23-7.26-7.23-18t7.23-17.87q7.22-7.12 17.9-7.12h629.74q10.68 0 17.9 7.26 7.23 7.26 7.23 18t-7.23 17.86q-7.22 7.13-17.9 7.13H165.13Z"/>
        </svg>
      </button>

      <nav id="navbar" className={isSidebarOpen ? 'show' : ''}>
        <ul>
          <li>
            <button 
              id="close-sidebar-button" 
              onClick={closeSidebar} 
              aria-label="close sidebar"
            >
              <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#c9c9c9">
                <path d="m480-444.62-209.69 209.7q-7.23 7.23-17.5 7.42-10.27.19-17.89-7.42-7.61-7.62-7.61-17.7 0-10.07 7.61-17.69L444.62-480l-209.7-209.69q-7.23-7.23-7.42-17.5-.19-10.27 7.42-17.89 7.62-7.61 17.7-7.61 10.07 0 17.69 7.61L480-515.38l209.69-209.7q7.23-7.23 17.5-7.42 10.27-.19 17.89 7.42 7.61 7.62 7.61 17.7 0 10.07-7.61 17.69L515.38-480l209.7 209.69q7.23 7.23 7.42 17.5.19 10.27-7.42 17.89-7.62 7.61-17.7 7.61-10.07 0-17.69-7.61L480-444.62Z"/>
              </svg>
            </button>
          </li>
          <li className="home-li"><a className="active-link" aria-current="page" href="index.html">Home</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="features.html">Features</a></li>
          <li><a href="pricing.html">Pricing</a></li>
          <li><a className="accent-link" href="login.html">Login</a></li>
        </ul>
      </nav>
      
      <div 
        id="overlay" 
        onClick={closeSidebar} 
        aria-hidden="true" 
        style={{ display: isSidebarOpen ? 'block' : 'none' }}
      ></div>

      <main>
        <h1>Home</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem perferendis amet odio nostrum, in architecto voluptatum nihil incidunt. Mollitia enim, dolorum laborum voluptas voluptate modi ipsam quam. Similique repellat perspiciatis accusantium sed assumenda modi maiores id deleniti dolor obcaecati, ea asperiores amet corporis porro reiciendis quos qui laborum. Architecto, perferendis?</p>
      </main>
    </div>
  );
};

export default App;
