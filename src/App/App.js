// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CssBaseline, Toolbar } from '@mui/material';
import Sidebar from '../Components/Sidebar';
import PaperApprovement from '../Components/PaperApprovement';
import AnalysisBoard from '../Components/AnalysisBoard';
import EmailDetails from '../Components/EmailDetails';
import ComplaintsPanel from '../Components/ComplaintsPanel';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <CssBaseline />
        <Sidebar />
        <main style={{ flexGrow: 1, padding: '24px' }}>
          <Toolbar />
          <Routes>
            <Route path="/analysis" element={<AnalysisBoard />} />
            <Route path="/paper-approval" element={<PaperApprovement />} />
            <Route path="/paper-approval/:email" element={<EmailDetails />} />
            <Route path="/complaints" element={<ComplaintsPanel />} />
            
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
