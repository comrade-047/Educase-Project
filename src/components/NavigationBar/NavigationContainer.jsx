import { useNavigate, useLocation } from "react-router-dom";

function NavigationContainer(){

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

    return {homeHandler,prevHandler,pages,nextHandler,currentIndex};
}

export default NavigationContainer;
