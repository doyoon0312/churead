import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Post from './pages/Post';
import Profile from './pages/Profile';
import { useState } from 'react';
import Edit from './pages/Edit';

function App() {
  const [churead, setChuread] = useState('');

  const handlePost = (churead) => {
    setChuread(churead);
  };

  return (
    <div className="bg-gray-900 h-full text-white overflow:auto ">
      <div className="max-w-[572px] mx-auto h-full">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home churead={churead} />} />
            <Route path="/home" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/post" element={<Post onPost={handlePost} />} />
            <Route path="/edit" element={<Edit />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}
export default App;
