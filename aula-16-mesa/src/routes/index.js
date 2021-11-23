import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Apibrasil from '../pages/Apibrasil';

const RouteList = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/apibrasil" element={<Apibrasil />} />
    </Routes>
  </BrowserRouter>
);

export default RouteList;