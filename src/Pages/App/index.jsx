import {useRoutes,BrowserRouter} from 'react-router-dom'
//import { ShoppingCartProvider } from '../../Context'
import Navbar from '../../Components/Navbar'
//import MyAccount from '../MyAccount'
//import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
//import MyOrder from '../MyOrder'
//import SignIn from '../SignIn'
import Home from '../Home'
import './App.css'
const AppRoutes = () =>{
    let routes = useRoutes([
    //{    path: '/my-account',element: <MyAccount/>},
    //{    path: '/my-orders',element: <MyOrders/>},
    //{    path: '/my-order',element: <MyOrder/>},
    //{    path: '/sign-in',element: <SignIn/>},
    {    path: '/*',element: <NotFound/>},
    {    path: '/',element: <Home/>},
    ])
    return routes
}
const App = () => {
    return (
        <BrowserRouter>
            <AppRoutes/>
             <Navbar/> 
        </BrowserRouter>
    )
}

export default App