

function MenuItem({btnBackground, btnContent, btnicon}){

    return (
        <Link to='/' className={`py-5 px-3 rounded-xl text-white font-bold text-2xl ${btnBackground}`}>{btnicon} {btnContent} </Link>
    )
}