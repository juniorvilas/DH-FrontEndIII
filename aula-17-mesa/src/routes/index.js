import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Apibrasil from '../pages/Apibrasil';
import NotFound from '../pages/NotFound';

const RouteList = () => (
  <BrowserRouter>
    <Routes>
      
      <Route path="/" element={<Home />} />
      <Route path="/:cep" element={<Home />} />
      <Route path="/apibrasil/" element={<Apibrasil />} />
      <Route path="/apibrasi/:cep" element={<Apibrasil />} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
  </BrowserRouter>
);

export default RouteList;