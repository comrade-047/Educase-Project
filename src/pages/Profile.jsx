function Profile() {

  return (
    <>
      <div className="flex flex-col h-screen max-w-md ">
      <header className="bg-white py-6 px-6 border-b shadow-sm">
        <h2 className="text-xl pt-6 ">Account Settings</h2>
      </header>

      <div className="bg-gray-100 px-6 flex flex-col flex-1 py-6">

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
      </div>
    </>
  );
};

export default Profile;