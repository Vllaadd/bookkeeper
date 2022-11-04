import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Expenses from './components/expenses';
import Invoices from './components/invoices';
import Invoice from './components/invoice';

const root = document.getElementById('root');
render(
  <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<App />} />
      <Route path='/expenses' element={<Expenses />} />
      <Route path='/invoices' element={<Invoices />}>
        <Route index element={
          <div>
            <p>Select an invoice</p>
          </div>
        } />
        <Route path=":invoiceId" element={<Invoice />}/>
      </Route>
      <Route path='*' element={<div>There's nothing here!</div>} />
    </Routes>
  </BrowserRouter>, root
);

