import { useState, useEffect } from "react"
import { collection, getDocs } from "firebase/firestore"
import db from "../config/firebase.js"

const Home = () => {
  const [products, setProducts] = useState([])


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
                <p>{product.vegetarian ? 'Vegetariano' : 'No vegetariano'}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export { Home }