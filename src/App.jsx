import { useState } from "react";
import "./App.css";
import HomePage from "./pages/home";
import DashBoard from "./pages/dashboard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
    const [page, setPage] = useState(true);

    const handleHome = () => {
        setPage(true);
    };
    const handleDashboard = () => {
        setPage(false);
    };
    return (
        <div className="App">
            {page ? (
                <HomePage handleDashboard={handleDashboard} />
            ) : (
                <DashBoard handleHome={handleHome} />
            )}
            <ToastContainer toastStyle={{ backgroundColor: "black" }} />
        </div>
    );
}

export default App;
