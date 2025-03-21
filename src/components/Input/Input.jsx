function Input({ placeholder, label,type }) {
    return (
      <div className="relative w-full">

        <label
            className="absolute left-3 -top-2 px-1 bg-white text-sm text-purple-500"
        >
            {label}
        </label>
        <input
          className="w-full py-2 px-3 border border-gray-400 rounded-lg text-sm  outline-none focus:ring-1"
          type={type}
          placeholder={placeholder}
        />
      </div>
    );
  }
  
  export default Input;
  