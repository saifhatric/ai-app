// import Demo from "./components/Demo"
import { Route, Routes } from "react-router-dom"
import './App.css';
import {
  Layout,
  Home,
  Pricing,
  ContactPage,
  TextSummarize,
  Demo,
  ErrorPage
} from "./components/index"
const App = () => {

  return (

    <main >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/api">
            <Route path="pricing" element={<Pricing />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="summarize-text" element={<TextSummarize />} />
            <Route path="summarize-url" element={<Demo />} />

          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Route>


      </Routes>
    </main>

  )
}

export default App
