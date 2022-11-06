
import { Link } from "react-router-dom";
import { getInvoices } from "../components/data";

export default function Invoices() {
    let invoices = getInvoices();
    return (
        <div>
            <nav>
                {invoices.map((invoice) => (
                    <Link
                        to={`/invoices/${invoice.number}`}
                        key={invoice.number}
                    >
                        {invoice.name}
                    </Link>
                ))}
            </nav>
        </div>
    )
}

