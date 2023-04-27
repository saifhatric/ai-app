import { useEffect } from "react"
import { useState } from "react"
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
    const [allArticles, setallArticles] = useState([])
    const [copied, setcopied] = useState(false)
    const [getSummary, {
        error, isFetching, isError
    }] = useLazyGetSummaryQuery()

    useEffect(() => {
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
        <section className="mt-16 w-full max-w-xl app">
            <div className="gradient" />
            <div className="flex flex-col w-full gap-2">
                <form className="relative flex justify-center items-center"
                    onSubmit={(e) => { handleSubmit(e) }}>
                    <img src={linkIcon} alt="link_icon"
                        className="absloute left-0 my-2 ml-3 w-5" />
                    <input type="url"
                        placeholder="Enter a URL"
                        value={article.url}
                        onChange={(e) => setarticle({ ...article, url: e.target.value })}
                        required
                        className="url_input peer" />
                    <button type="submit"
                        className="submit_btn 
                        peer-focus:border-gray-700
                        peer-focus:text-gray-700">
                        ↩
                    </button>
                </form>
                <div className="flex flex-col gap-1 max-h-60 overflow-y-auto">
                    {allArticles.map((item, index) => (
                        <div key={`link-${index}`}
                            onClick={() => setarticle(item)}
                            className="link_card">
                            <div className="copy_btn">
                                <img src={copied ? tick : copy} alt="copy_icon"
                                    onClick={() => handleCopy(item.url)}
                                    className="w-[40%] h-[40%] object-contain" />
                            </div>
                            <p className="flex-1 font-poppins text-blue-700 font-medium text-sm truncate">
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
                            <h2 className="font-poppins font-bold text-xl text-gary-600">
                                Article <span className="blue_gradient">Summary</span>
                            </h2>
                            <div className="summary_box">
                                <p className="font-poppins font-medium text-sm text-gray-700">{article.summary}</p>
                            </div>
                        </div>
                    )
                )}
            </div>
        </section>
    )
}

export default Demo