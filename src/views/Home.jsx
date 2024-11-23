import { useState, useEffect } from "react"
import { collection, getDocs } from "firebase/firestore"
import db, { auth } from "../config/firebase.js"

import Login from "../components/Login.jsx"
import Register from "../components/Register.jsx"
import { onAuthStateChanged } from "firebase/auth"


const Home = () => {
  const [products, setProducts] = useState([])
  const [usuario, setUsuario] = useState(null)

  onAuthStateChanged (auth, (usuarioFirebase)=>{ 
    if (usuarioFirebase) {
      setUsuario(usuarioFirebase)
    } else{
      setUsuario(null)
    }
   })


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsCollection = collection(db, "products")
        const productsSnapShot = await getDocs(productsCollection)
        const productsList = productsSnapShot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
        setProducts(productsList)
        console.log(products)
      } catch (error) {
        console.error("Error fetchind products:", error)
      }
    }

    fetchProducts()
  }, [])

  return (
<<<<<<< HEAD
    <> 
      { usuario ?
      <div> correoUsuario = {usuario.mail} 
      <div className="container p-5">
        <h1 className="title has-text-centered">Nancy Estepo Joyas</h1>
        <div className="columns is-multiline">
          {products.map(product => (
            <div key={product.id} className="column is-one-quarter">
              <div className="card">
                <div className="card-image p-5">
                  <figure className="image is-4by3">
                    <img src={product.image} alt={product.name} />
                  </figure>
                </div>
                <div className="card-content">
                  <h2 className="title is-4">{product.name}</h2>
                  <p className="subtitle is-6">Precio: ${product.price}</p>
                  <p>{product.description}</p>
                  <p><strong>Tamaño:</strong> {product.size}</p>
                  <p>{product.stock ? 'Hay Stock' : 'No hay Stock'}</p>
                </div>
=======
    <div className="container p-5">
      <h1 className="title has-text-centered">Nancy Estepo Joyas</h1>
      <div className="columns is-multiline">
        {products.map(product => (
          <div key={product.id} className="column is-one-quarter">
            <div className="card">
              <div className="card-image p-5">
                <figure className="image is-4by3">
                  <img src={product.image} alt={product.name} />
                </figure>
              </div>
              <div className="card-content">
                <h2 className="title is-4">{product.name}</h2>
                <p className="subtitle is-6">Precio: ${product.price}</p>
                <p>{product.description}</p>
                <p><strong>Tamaño:</strong> {product.size}</p>
                <p>{product.stock ? 'Hay Stock' : 'No hay Stock'}</p>
>>>>>>> 54aa1f863a7ee83c17e9562cb2104fb3d4574986
              </div>
            </div>
          ))}
        </div>
        <a href="/Dashboard" className="button is-primary">Administracion</a>
      </div>
<<<<<<< HEAD
      </div>
  : <Login/>}
  </>
=======
      <a href="/Dashboard" className="button is-primary">Administracion</a>
    </div>
>>>>>>> 54aa1f863a7ee83c17e9562cb2104fb3d4574986
  )
}

export { Home }