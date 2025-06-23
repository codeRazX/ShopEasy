
import { Outlet } from 'react-router-dom';
import { useState } from 'react';

export const TestLayout = () => {
  const [cart, setCart] = useState([]);
  return <Outlet context={{ cart, setCart }} />;
};
