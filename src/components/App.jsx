import React from 'react';
import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';
const Home = lazy(() => import('../pages/Home'));
const AddContact = lazy(() => import('../pages/AddContact'));
const NotFound = lazy(() => import('../pages/NotFound'));

export function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="add" element={<AddContact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
