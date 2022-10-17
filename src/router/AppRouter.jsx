import { Route, Routes } from "react-router-dom"
import { LoginPage } from '../auth'
import { HeroesRoutes } from "../Heroes"
import { PrivateRoutes } from "./PrivateRoutes"
import { PublicRoutes } from "./PublicRoutes"

 
export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="Login" element={
              <PublicRoutes>
                <LoginPage />
              </PublicRoutes>
            } />

            <Route path="/*" element={
              <PrivateRoutes>
                <HeroesRoutes/>
              </PrivateRoutes>
            }/>
        </Routes>
    </>
  )
}
