import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../pages/home/Home'
import DetalhesProduto from '../pages/detalhesProduto/DetalhesProduto'
import Layout from '../layout/Layout'
import Login from '../pages/login/Login'
import MyProvider from '../context/MyContext'

export default function Rotas() {

    return(
        <BrowserRouter>
            <MyProvider>
                <Routes>
                    <Route path="/login" element={<Login/>}/>
                    <Route path='/' element={<Layout/>}>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/produto/:idProd' element={<DetalhesProduto/>}/>
                    </Route>


                </Routes>
            
            </MyProvider>
        </BrowserRouter>

    )

}