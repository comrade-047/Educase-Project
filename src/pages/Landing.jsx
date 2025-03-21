import Button from "../components/Button/Button";

function LandingPage() {
  return (
    <div className="flex flex-col justify-end items-center h-screen p-6 "> {/** this has to be removed and should be provided by the app component */}

      <div className="flex flex-col w-full">

        <h1 
            className="text-3xl font-bold mb-2"
        >
            Welcome to PopX
        </h1>

        <p 
            className="text-gray-600 mb-6"
        >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, recusandae!
        </p>

        <div className="buttons flex flex-col gap-3 w-full">

          <Button text="Create Account" bgColor="bg-purple-600" color="text-white" />
          <Button text="Already Registered? Login" bgColor="bg-purple-300" color="text-black" />
          
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
