import { useNavigate, useLocation } from "react-router-dom";

function NavigationBar() {

    const navigate = useNavigate();
    const location = useLocation();

    const pages = ["/", "/signup", "/login", "/profile"];
    const currentIndex = pages.indexOf(location.pathname);

    const homeHandler = () => navigate("/");

    const nextHandler = () => {
        if (currentIndex === pages.length - 1) {
            navigate(pages[0]); 
        } else {
            navigate(pages[currentIndex + 1]); 
        }
    };

    const prevHandler = () => {
        if (currentIndex === 0) {
            navigate(pages[pages.length - 1]);
        } else {
            navigate(pages[currentIndex - 1]); 
        }
    };

    return (
        <div className="flex justify-center">

            <div className="flex w-full items-center justify-center">

                <button
                    className="home p-2 text-gray-400"
                    onClick={homeHandler}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                        <path d="M12 3l10 9h-3v8h-14v-8h-3l10-9z" />
                    </svg>
                </button>

                <button
                    className="prev text-xl p-2 text-gray-400"
                    onClick={prevHandler}
                >
                    &#10094;
                </button>

                <p 
                    className="text-gray-400"
                >   
                    {`${currentIndex + 1}/${pages.length}`}
                
                </p>

                <button 
                    className="next text-xl p-2 text-gray-400" 
                    onClick={nextHandler}
                >
                    &#10095;
                </button>
            </div>
        </div>
    );
}

export default NavigationBar;
