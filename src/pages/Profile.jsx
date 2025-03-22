function Profile() {
    
  return (
    <>
      <header className="bg-white pt-6 px-6 border-b shadow-sm">
        <h2 className="text-xl ">Account Settings</h2>
      </header>
      <div className="bg-gray-300 px-6 flex flex-col min-h-screen py-6">
        <div className="flex items-center gap-2">
          <div className="relative">
            <img
              className="w-16 h-16 rounded-full border"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6D1qF54qQKoFG4UAvnivLPd9uWw7jkwyilg&s"
              alt="Profile"
            />
          </div>
          <div>
            <p className="text-lg font-semibold">Marry Doe</p>
            <p className="text-gray-600">Marry@gmail.com</p>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-gray-700">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            aliquam laborum atque molestias a suscipit hic id, minus placeat
            incidunt, libero ratione nisi.
          </p>
          <br />
        </div>
        <hr />
      </div>
    </>
  );
};

export default Profile;