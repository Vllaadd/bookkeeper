
import { NavLink, Outlet, useSearchParams } from "react-router-dom";
import { getInvoices } from "../components/data";

export default function Invoices() {
    let invoices = getInvoices();
    let [searchParams, setSearchParams] = useSearchParams();
    return (
        <div>
            <nav>
                <input
                value={searchParams.get("filter")}
                onChange={(event)=>{
                    let filter = event.target.value;
                    if(filter){
                        setSearchParams({filter});
                    }else{
                        setSearchParams({});
                    }
                }}
                />
                {invoices
                .filter((invoice)=>{
                    let filter = searchParams.get("filter");
                    if(!filter) return true;
                    let name = invoice.name.toLocaleLowerCase();
                    return name.startsWith(filter.toLowerCase())
                }).map((invoice) => (
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

