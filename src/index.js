import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Expenses from './routes/expenses';
import Invoices from './routes/invoices';
import Invoice from "./components/invoice";

const root = document.getElementById('root');
render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} >
        <Route path='/expenses' element={<Expenses />} />
        <Route path='/invoices' element={<Invoices />}>
            <Route index element={<div>Select an invoice</div>} />
            <Route path=':invoiceId' element={<Invoice />} />
        </Route>
      </Route>
      <Route path='*' element={<div><p>There's nothing here!</p></div>} />
    </Routes>
  </BrowserRouter>, root
);

