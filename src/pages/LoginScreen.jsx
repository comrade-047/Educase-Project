import Button from "../components/Button/Button";
import Input from "../components/Input/Input";

function LoginScreen() {

  return (
    <div className="flex flex-col justify-start max-w-md h-screen items-center p-6  ">

      <div className="flex flex-col w-full">

        <h1
            className="text-3xl font-semibold mb-2"
        >
            Sign in to your PopX account
        </h1>

        <p
            className="text-gray-600 mb-6"
        >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>

        <div 
            className="sigin-inputs flex flex-col gap-3 w-full"
        >
            <Input placeholder="Enter email address" label="Email Address" />
            <Input placeholder="Enter password" label="Password" />
            <Button text="Login" bgColor="bg-gray-300" color="text-white" link="/profile" />


        </div>
      </div>
    </div>
  );
  
}

export default LoginScreen;
