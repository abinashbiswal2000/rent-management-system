import { useNavigate, Link } from "react-router"
import { type Dispatch, type SetStateAction } from "react"; 

type NavBarComponentProps = {
    setLoggedIn: Dispatch<SetStateAction<string | null>>    
}

export default function NavBarComponent (NavBarComponentProps : NavBarComponentProps) {

    const btnClassName = "cursor-pointer h-full p-4 hover:bg-gray-700 transition duration-300"

    const navigate = useNavigate();
    
    return (
        <div className="bg-black text-white min-h-14 flex items-center justify-between text-lg sticky top-0">
            <Link to="/" className={btnClassName}>Home</Link>
            <button 
            className={btnClassName} 
            onClick={
                () => {
                    localStorage.removeItem("token");
                    NavBarComponentProps.setLoggedIn(null);
                    navigate('/loginPage');
                }

            }
                >
                Logout
                </button>            
        </div>
    )
}