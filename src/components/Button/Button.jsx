function Button({ text,color,bgColor,onClick }) {

    return (

      <button
        className={`w-full py-1 px-2 rounded-lg font-semibold ${bgColor} ${color}`}
        onClick={onClick}
      >
        {text}
      </button>

    );
}
  
export default Button;
