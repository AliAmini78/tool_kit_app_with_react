import { Link } from "react-router-dom";


const CalculationToolPage  = () => {

    return (
        <div>
            <div className="container mx-auto py-8">
                <div className="grid gap-6 grid-cols-4 py-8 content-center items-stretch"> 
                    <div className="border h-80"> ماشین حساب</div>
                    <div className="border">زمان خدمت </div>
                    <div className=" border">کسری </div>
                    <div className="border">
                        <Link to="todo" className="hover:text-gray-400">
                            تودو
                        </Link>
                    </div>

                </div>
            </div>

        </div>
    )
}


export default CalculationToolPage;
