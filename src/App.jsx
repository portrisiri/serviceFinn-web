import React from 'react';
import AppRouter from './routes/AppRouter';
import MainNav from './components/common/MainNav';
import 'leaflet/dist/leaflet.css'

function App() {
  return (
    <div>
      {/* <MainNav/> */}
    <main>
      <AppRouter/>
    </main>
    </div>
  )
}

export default App;
