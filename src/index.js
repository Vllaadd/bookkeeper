import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Expenses from './components/expenses';
import Invoices from './components/invoices';

const root = document.getElementById('root');
render(
  <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<App />} />
      <Route path='/expenses' element={<Expenses />} />
      <Route path='/invoices' element={<Invoices />} />
      <Route path='*' element={<div>There's nothing here!</div>} />
    </Routes>
  </BrowserRouter>, root
);

