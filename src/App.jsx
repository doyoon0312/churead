import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Post from './pages/Post';

function App() {
  return (
    <div className="bg-gray-900 h-full text-white overflow:auto ">
      <div className="max-w-[572px] mx-auto h-full">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/post" element={<Post />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}
export default App;
