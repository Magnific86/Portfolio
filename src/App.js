import { BrowserRouter, Routes, Route } from "react-router-dom"

// pages
import { Home, About, Contact, ProjectPage, ErrorPage, GitHubPage, FileReaderPage } from "./pages"

// components
import { Sidebar, ThemeTemplate } from "./components"

import "./utils/templateColors.scss"

function App() {
    return (
        <BrowserRouter>
            <Sidebar />
            <ThemeTemplate />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/project" element={<ProjectPage />} />
                <Route path="/github" element={<GitHubPage />} />
                <Route path="/filereader" element={<FileReaderPage />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
