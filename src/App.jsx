import React from 'react';
import AppRouter from './routes/AppRouter';
import MainNav from './components/common/MainNav';


function App() {
  return (
    <div>
      <MainNav/>
    <main>
      <AppRouter/>
    </main>
    </div>
  )
}

export default App;
