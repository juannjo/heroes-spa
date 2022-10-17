import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../../ui"
import { DcPage, HeroPage, MarvelPage, SearchPage } from "../pages"

export const HeroesRoutes = () => {
  return (
    <>
        <Navbar />

        <Routes>
            <Route path="/" element={<Navigate to="marvel"/>} />
            <Route path="Marvel" element={<MarvelPage />} />
            <Route path="DC" element={<DcPage />} />
            <Route path="Hero/:id" element={<HeroPage/>} />
            <Route path="Search" element={<SearchPage />} />
        </Routes>
    </> 
  )
}
