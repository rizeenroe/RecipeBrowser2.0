import { useEffect, useState } from "react";
import axios from "axios";

function Home() {

    const openSidebar = () => {

    }
    const closeSidebar = () => {
        
    }
    // const openSidebar = () => {
        
    // }
  return (
    <div>
      <a href="#main-content" className="skip-link">Skip to main content</a>

      <button
        id="open-sidebar-button"
        onClick={() => openSidebar()}
        aria-label="open sidebar"
        aria-expanded="false"
        aria-controls="navbar"
      >
        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#c9c9c9">
          <path d="M165.13-254.62q-10.68 0-17.9-7.26-7.23-7.26-7.23-18t7.23-17.86q7.22-7.13 17.9-7.13h629.74q10.68 0 17.9 7.26 7.23 7.26 7.23 18t-7.23 17.87q-7.22 7.12-17.9 7.12H165.13Zm0-200.25q-10.68 0-17.9-7.27-7.23-7.26-7.23-17.99 0-10.74 7.23-17.87 7.22-7.13 17.9-7.13h629.74q10.68 0 17.9 7.27 7.23 7.26 7.23 17.99 0 10.74-7.23 17.87-7.22 7.13-17.9 7.13H165.13Zm0-200.26q-10.68 0-17.9-7.26-7.23-7.26-7.23-18t7.23-17.87q7.22-7.12 17.9-7.12h629.74q10.68 0 17.9 7.26 7.23 7.26 7.23 18t-7.23 17.86q-7.22 7.13-17.9 7.13H165.13Z"/>
        </svg>
      </button>

      

      <div id="overlay" onClick={() => closeSidebar()} aria-hidden="true"></div>

      <main>
        <h1>Home</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem perferendis amet odio nostrum, in architecto voluptatum nihil incidunt. Mollitia enim, dolorum laborum voluptas voluptate modi ipsam quam. Similique repellat perspiciatis accusantium sed assumenda modi maiores id deleniti dolor obcaecati, ea asperiores amet corporis porro reiciendis quos qui laborum. Architecto, perferendis?</p>
      </main>
    </div>
  );
}

export default Home;
