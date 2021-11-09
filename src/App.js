import react from 'react';

import './App.css';
import { Header } from './components/layout/Header';
import { Components } from './Routes';

function App() {
  return (
    <div className="container">
      <Header />
      <Components />
    </div>
  );
}

export default App;
