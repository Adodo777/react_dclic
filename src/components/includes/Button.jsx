import { Link } from "react-router-dom";

function Button({btnBackground, btnContent}){

    return (
        <Link to='/' className={`py-5 px-3 rounded-xl text-white font-bold text-2xl ${btnBackground}`}>{btnContent} </Link>
    )
}

export default Button