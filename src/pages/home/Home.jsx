/* eslint-disable react/jsx-key */
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Produto from '../../components/produto/Produto'
import './styleHome.css'

export default function Home() {
  const [produtos, setProdutos] = useState([])

  useEffect(() => {
    getProdutos()
  }, [])

  async function getProdutos() {
    const response = await axios.get('https://dummyjson.com/products')

    console.log(response.data.products)

    setProdutos(response.data.products)
  }

  return (
    <main className="container-main">
      <div className="container-main-body">
        {produtos.slice(0, 20).map(item => (
          <Link to={`/produto/${item.id}`} style={{ textDecoration: 'none' }} key={item.id}>
            <Produto value={item} />
          </Link>
        ))}
      </div>
    </main>
  )
}
