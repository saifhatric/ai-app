
const Hero = () => {
    return (

        <header className="w-full flex items-center justify-center flex-col ">
            {/* <nav className="w-full flex justify-between items-center felx-row mb-10 pt-3">
                <img src={logo} alt="sumz-logo" className="w-28 object-contain" />
                <button type="button"
                    onClick={() => window.open('https://github.com/saifhatric')}
                    className="black_btn">
                    GitHub
                </button>
            </nav> */}
            <div className="text-center ">
                <h1 className="head-text text-5xl tracking-wider">Summarize  with<br className="md:hidden" />
                    <span className="orange_gradient text-6xl ">openAI</span>
                </h1>
                <h2 className="desc">
                    <span className="text-blue-800 text-2xl"> Summiz</span> an open-source article summraizer, That can make your reading sufficient
                </h2>
            </div>
        </header>


    )
}

export default Hero