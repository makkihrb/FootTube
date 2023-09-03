import React from 'react';
import MatchHighlights from './components/MatchHighlights';
import Navbar from './components/Navbar'; // Import the Navbar component

function App() {
  return (
    <div className="bg-gray-900 min-h-screen text-white font-sans">
      <Navbar /> {/* Include the Navbar */}
      <MatchHighlights />

    </div>
  );
}

export default App;
