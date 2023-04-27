import { useState } from "react"
import { usePostTextMutation } from "../Features/api/ArticleApi"
import {
    copy,
    loader,
    tick
} from "../assets"
import { Link } from "react-router-dom"
const TextSummarize = () => {

    const [text, settext] = useState("")
    const [SumText, setSumText] = useState("")
    const [copied, setcopied] = useState(false)
    const [postText, { isLoading, isError, error }] = usePostTextMutation()
    const handleText = async (e) => {
        e.preventDefault()
        const { data } = await postText({ text })
        setSumText(data)
    }
    const handleCopy = (summary) => {
        setcopied(true)
        navigator.clipboard.writeText(summary)
        setTimeout(() => setcopied(false), 3000)
    }

    return (
        <section>
            <div className="gradient" />
            <div className="w-full flex items-center justify-center flex-col ">

                <div className="text-center font-poppins">
                    <h1 className="head-text text-5xl tracking-wider ">Summarize  with<br className="md:hidden" />
                        <span className="orange_gradient text-6xl ">openAI</span>
                    </h1>
                    <h2 className="desc">
                        <span className="text-blue-800 text-2xl"> Summiz</span> an open-source article summraizer, That can make your reading sufficient
                    </h2>
                </div>
            </div>
            <form onSubmit={(e) => handleText(e)} className="relative flex justify-center items-center">
                <input type="text"
                    value={text}
                    className="url_input peer"
                    placeholder="Enter a Text"
                    onChange={(e) => settext(e.target.value)} />
                <button type="submit"
                    className="submit_btn 
                        peer-focus:border-gray-700
                        peer-focus:text-gray-700">
                    ↩
                </button>
            </form>
            <Link to={"/api/summarize-url"}>
                <p className="font-poppins my-4 text-center font-bold text-sm text-gray-500 hover:text-blue-900 ">
                    Do you Have a url ?
                </p>
            </Link>

            <div className="my-10 max-w-full flex justify-center item-center">
                {isLoading ? (
                    < img src={loader} alt="loader"
                        className="w-20 h-20 object-contain" />
                ) : isError ? (
                    <p className="font-bold text-black text-center">
                        Sorry, There is an error !<br />
                        <span className="font-popins fontnormal text-gray-700">
                            {error?.data?.error}
                        </span>
                    </p>
                ) : (
                    SumText.summary && (
                        <div className="flex flex-col gap-3">
                            <h2 className="font-poppins font-bold text-xl text-gary-600">
                                Text <span className="blue_gradient">Summary</span>
                            </h2>
                            <div className="summary_box">
                                <p className="font-poppins font-medium text-sm text-gray-700">{SumText.summary}</p>
                                <div className="copy_btn">
                                    <img src={copied ? tick : copy} alt="copy_icon"
                                        onClick={() => handleCopy(SumText.summary)}
                                        className="w-[40%] h-[40%] object-contain" />
                                </div>
                            </div>
                        </div>
                    )
                )}
            </div>
        </section>
    )
}

export default TextSummarize