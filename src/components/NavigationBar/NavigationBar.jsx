function NavigationBar() {

    let page = 1;

    return (
        <div className="flex justify-center">
            <div className="flex w-full items-center justify-center">
                <button
                    className="home p-2 text-gray-400"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                        <path d="M12 3l10 9h-3v8h-14v-8h-3l10-9z" />
                    </svg>
                </button>
                <button
                    className="prev text-xl p-2  text-gray-400"
                >
                    &#10094;
                </button>
                <p className=" text-gray-400">{`${page}/4`}</p>
                <button
                    className="next text-xl p-2  text-gray-400"
                >
                    &#10095;
                </button>
            </div>
        </div>
    );
}

export default NavigationBar;
