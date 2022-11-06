
import { NavLink } from "react-router-dom";
import { getInvoices } from "../components/data";

export default function Invoices() {
    let invoices = getInvoices();
    return (
        <div>
            <nav>
                {invoices.map((invoice) => (
                    <NavLink
                        to={`/invoices/${invoice.number}`}
                        key={invoice.number}
                    >
                        {invoice.name} <br/>
                    </NavLink>
                ))}
            </nav>
        </div>
    )
}

