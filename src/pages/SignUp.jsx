import Button from "../components/Button/Button";
import Input from "../components/Input/Input";
import NavigationBar from "../components/NavigationBar/NavigationBar";

function SignUp(){

    return (
        <div className="flex flex-col items-center justify-between h-screen p-6 max-w-md pb-0">

            <div className="flex flex-col w-full flex-grow ">

                <h1 
                    className="text-3xl font-semibold mb-4"
                >   
                    Create your PopX account
                </h1>
                
                <div 
                    className="account-info-inputs flex flex-col gap-3 flex-grow "
                >
                    <Input placeholder="" label="Full Name " important={true} type="text"/>
                    <Input placeholder="" label="Phone number" important={true} type="number" />
                    <Input placeholder="" label="Email Address" important={true} type="email" />
                    <Input placeholder="" label="Password" important={true} type="password" />
                    <Input placeholder="" label="Company name" type="text" />
                    
                    <div
                        className="flex flex-col gap-2 mt-3"
                    >
                        <label className="">Are you an agency?<span className="text-red-500 text-sm">*</span></label>
                        <div className="flex items-center gap-4">

                            <label className="flex items-center gap-2">
                                <input type="radio" name="agency" value="Yes" defaultChecked className="accent-purple-600" />
                                Yes
                            </label>
                            <label className="flex items-center gap-2 ">
                                <input type="radio" name="agency" value="No" className="accent-purple-600" />
                                No
                            </label>
                            
                        </div>
                    </div>
                </div>

                <Button color="text-white" bgColor="bg-purple-700" text="Create Account" link="/profile" />
            </div>

            <NavigationBar/>
        </div>
    );
}


export default SignUp;