import * as React from 'react';
import './style.css';

export default function App() {
  const [mode, setMode] = React.useState('dark');

  const handleClick = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
  };

  return (
    <main className={mode}>
      {
        <button onClick={handleClick}>
          {mode === 'dark' ? 'Activate Light Mode' : 'Activate Dark Mode'}
        </button>
      }
    </main>
  );
}
