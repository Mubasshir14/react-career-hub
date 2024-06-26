import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen gap-5 ">
            <h1 className="text-5xl font-bold text-red-600 mb-6">Opps!!!</h1>
            <p className="text-5xl font-bold text-red-600 mb-6">❌❌</p>
            <button className="btn"><Link to='/'>Go BAck To Home</Link></button>
        </div>
    );
};

export default ErrorPage;