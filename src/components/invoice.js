import { useParams } from "react-router-dom";
import { getInvoices } from "./data";

export default function Invoice() {
    let params = useParams();
    let invoice = getInvoices(parseInt(params.invoiceId, 10));
    return (
        <div>
            <h2>Total Due: {invoice.amount}</h2>
            <p>
                {invoice.name}:{invoice.number}
            </p>
            <p>Due Date: {invoice.due}</p>
        </div>

    );
}