import { useState, useEffect, useRef } from "react"
import { useLazyGetSummaryQuery } from "../Features/api/ArticleApi"
import {
    copy,
    linkIcon,
    loader,
    tick
} from "../assets"

const Demo = () => {
    const [article, setarticle] = useState({
        url: "",
        summary: ""
    })
    const inputRef = useRef(null)
    const [allArticles, setallArticles] = useState([])
    const [copied, setcopied] = useState(false)
    const [getSummary, {
        error, isFetching, isError
    }] = useLazyGetSummaryQuery()

    useEffect(() => {
        inputRef.current?.focus()
        const articlesFromLocalStorage = JSON.parse(localStorage.getItem("articles"))
        if (articlesFromLocalStorage) {
            setallArticles(articlesFromLocalStorage)
        }
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const { data } = await getSummary({ articleUrl: article.url })
        if (data?.summary) {
            const newArticle = { ...article, summary: data.summary }
            setarticle(newArticle)
            setallArticles([...allArticles, newArticle])
            localStorage.setItem("articles", JSON.stringify(allArticles))

        }
    }
    const handleCopy = (copyUrl) => {
        setcopied(true)
        navigator.clipboard.writeText(copyUrl)
        setTimeout(() => setcopied(false), 3000)
    }
    return (
        <section className="w-full">

            <div className="w-full  flex items-center justify-center flex-col ">

                <div className="text-center font-poppins mt-[8rem] mb-4 ">
                    <h1 className="head-text text-5xl tracking-wider text-gray-500 ">Summarize  with<br className="md:hidden" />
                        <span className="orange_gradient text-6xl ">openAI</span>
                    </h1>
                    <h2 className="desc">
                        <span className="text-secondary text-2xl"> Summiz</span> an open-source article summraizer, That can make your reading sufficient
                    </h2>
                </div>
            </div>
            <div className="flex flex-col w-full gap-2">
                <form className=" flex justify-center items-center"
                    onSubmit={(e) => {
                        handleSubmit(e);

                    }}>
                    <img src={linkIcon} alt="link_icon"
                        className=" my-2 mx-3 w-5" />
                    <input type="url"
                        ref={inputRef}
                        placeholder="Enter a URL"
                        value={article.url}
                        onChange={(e) => setarticle({ ...article, url: e.target.value })}
                        required
                        className="url_input outline-none" />
                    <button type="submit"
                        className="submit_btn 
                        ">
                        ↩
                    </button>
                </form>
                <div className="flex flex-col justify-center gap-1 max-h-60 overflow-y-auto">
                    {Array.from(allArticles).map((item, index) => (
                        <div key={`link-${index}`}
                            onClick={() => setarticle(item)}
                            className="link_card ml-[15%] ">
                            <div className="copy_btn">
                                <img src={copied ? tick : copy} alt="copy_icon"
                                    onClick={() => handleCopy(item.url)}
                                    className="w-[40%] h-[40%] object-contain" />
                            </div>
                            <p className="flex-1 font-poppins  text-blue-700 font-medium text-sm truncate">
                                {item.url}
                            </p>

                        </div>
                    ))}
                </div>
            </div>
            <div className="my-10 max-w-full flex justify-center item-center">
                {isFetching ? (
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
                    article.summary && (
                        <div className="flex flex-col gap-3">
                            <h2 className="font-poppins font-bold text-xl text-white/40">
                                Article <span className="blue_gradient">Summary</span>
                            </h2>
                            <div className="summary_box">
                                <p className="font-poppins font-medium text-sm text-dimWhite ">{article.summary}</p>
                            </div>
                        </div>
                    )
                )}
            </div>
        </section>
    )
}

export default Demo