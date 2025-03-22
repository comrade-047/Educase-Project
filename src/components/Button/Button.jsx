import { Link } from 'react-router-dom';

function Button({ text, bgColor, color, link }) {
  
  return link ? (
    <Link to={link} className={`px-4 py-2 ${bgColor} ${color} rounded text-center`}>
      {text}
    </Link>
  ) : (
    <button className={`px-4 py-2 ${bgColor} ${color} rounded`}>
      {text}
    </button>
  );
}

export default Button;
