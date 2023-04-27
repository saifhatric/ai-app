import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const rapidApiKey = import.meta.env.VITE_RAPID_API_KEY;
const rapidApiHost = import.meta.env.VITE_RAPID_API_HOST;

export const articleApi = createApi({
    reducerPath: "articleApi",
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com/',
        prepareHeaders: ((headers) => {
            headers.set('X-RapidAPI-Key', rapidApiKey);
            headers.set('X-RapidAPI-Host', rapidApiHost)

        })
    }),
    tagTypes: ["article"],
    endpoints: (builder) => ({
        getSummary: builder.query({
            query: (params) => `/summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`,
            providesTags: ["article"]

        }),
        postText: builder.mutation({
            query: (data) => ({
                url: "/summarize-text",
                method: "POST",
                body: data
            }),
            providesTags: ["article"]
        })
    })
})

export const {
    useLazyGetSummaryQuery,
    usePostTextMutation,
} = articleApi