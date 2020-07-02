import React from 'react';
import './App.scss';

function App() {
  return (
    <div>
      <header>
        <h1>Martijn Halekor</h1>
        <span>designer</span>
      </header>

      <nav>
        
      </nav>

      <main>
        <article>
          <h2>Glitch Art</h2>
          <p>Databending experiment.</p>
        </article>

        <div className="grid">
          <div className="row">
            <div className="col">
              <img src="./img/glitch-1.jpg" alt="glitch" />
            </div>
            <div className="col">
              <img src="./img/glitch-2.jpg" alt="glitch" />
            </div>
            <div className="col">
              <img src="./img/glitch-3.jpg" alt="glitch" />
            </div>
            <div className="col">
              <img src="./img/glitch-4.jpg" alt="glitch" />
            </div>
            <div className="col">
              <img src="./img/glitch-5.jpg" alt="glitch" />
            </div>
          </div>
        </div>
      </main>

    </div>
  );
}

export default App;