import { useState } from 'react';
import reactLogo from './assets/react.svg';

// import Header from './components/Header';
import Nav from './components/Nav/Index';

import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="grid md:grid-cols-5">
      {/* <Nav /> */}
      <main className="px-12 py-6 md:col-span-4 bg-cyan-50">
        {/* <h3 className="text-3xl">Hello</h3> */}
        {/* <AuthButtons />
        <Header />
        <Trending /> */}
      </main>
    </div>
  );
}

export default App;
