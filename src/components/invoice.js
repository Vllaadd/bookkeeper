import  { useParams } from "react-router-dom";
import { getInvoices } from "./data";

export default function Invoice(){
    let params = useParams();
    return (
        <h2>Invoice: {params.invoiceId}</h2>
    );
}