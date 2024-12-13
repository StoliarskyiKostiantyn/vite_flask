import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
  return (
    <div className="pt-8 relative overflow-x-auto shadow-md sm:rounded-lg">
      <h2 className="dark:text-white text-black">THIS IS REACT@@@@@@</h2>
    </div>
  );
};

const rootElement = document.getElementById('react-root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
}
