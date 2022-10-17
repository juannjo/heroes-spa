import { useContext } from "react"
import { Navigate, useLocation } from "react-router-dom"
import { AuthContext } from "../auth/context"

export const PrivateRoutes = ({ children }) => {

    const { pathname, search } = useLocation()

    const lastPath = pathname + search
    localStorage.setItem('lastPath', lastPath)
    
    const { logged } = useContext( AuthContext )  
    return (logged)
    ? children
    : <Navigate to="/login"/>
}
