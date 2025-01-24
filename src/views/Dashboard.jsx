import { useState, useEffect } from "react"
import db from "../config/firebase.js"
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore"

const Dashboard = () => {
  const initialFormData = {
    name: "",
    price: 0,
    description: "",
    size: "",
    stock: false,
    image: ""
  }

  const [formData, setFormData] = useState(initialFormData)
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [editMode, setEditMode] = useState(false)
  const [editProductId, setEditProductId] = useState(null)

  const fetchProducts = async () => {
    try {
      const productsCollection = collection(db, "products")
      const productsSnapShot = await getDocs(productsCollection)
      const productsList = productsSnapShot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))
      setProducts(productsList)
      setLoading(false)
      console.log(products)
    } catch (error) {
      console.error("Error fetchind products:", error)
    }
  }

  useState(() => {
    fetchProducts()
  }, [])

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      if (editMode) {
        const productRef = doc(db, "products", editProductId)
        await updateDoc(productRef, formData)
        alert("Producto actualizado correctamente...")
        setEditMode(false)
        setEditProductId(null)
        setFormData(initialFormData)
        fetchProducts()
      } else {
        await addDoc(collection(db, "products"), formData)
        alert("Producto agregado exitosamente...")
        setFormData(initialFormData)
        fetchProducts()
      }
    } catch (error) {
      console.error("Error al guardar el producto:", error)
    }
  }


  const handleEdit = (product) => {
    setFormData({
      name: product.name,
      price: product.price,
      description: product.description,
      size: product.size,
      stock: product.stock,
      image: product.image
    })
    setEditMode(true)
    setEditProductId(product.id)
  }


  const handleDelete = async (productId) => {
    try {
      await deleteDoc(doc(db, "products", productId))
      alert("Producto borrado con éxito...")
      fetchProducts()
    } catch (error) {
      console.error("Error al borrar el producto:", error)
    }
  }

  return (
    <div className="container p-5">
      <form onSubmit={handleSubmit} className="box">
        <div className="field">
          <label className="label">Nombre</label>
          <div className="control">
            <input
              className="input"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Precio</label>
          <div className="control">
            <input
              className="input"
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Descripción</label>
          <div className="control">
            <textarea
              className="textarea"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            ></textarea>
          </div>
        </div>
        <div className="field">
          <label className="label">Tamaño</label>
          <div className="control">
            <input
              className="input"
              type="text"
              name="size"
              value={formData.size}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="field">
          <label className="checkbox">
            <input
              type="checkbox"
              name="stock"
              checked={formData.stock}
              onChange={handleChange}
            />
            {' '}Hay Stock
          </label>
        </div>
        <div className="field">
          <label className="label">Imagen (URL)</label>
          <div className="control">
            <input
              className="input"
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="control">
          <button className="button is-primary" type="submit">
            {editMode ? "Guardar Cambios" : "Agregar Producto"}
          </button>
        </div>
      </form>

      <table className="table is-fullwidth is-striped">
        <thead>
          <tr>
            <th>Imagen</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Descripción</th>
            <th>Tamaño</th>
            <th>Hay Stock</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td><img src={product.image} alt={product.name} style={{ width: "50px", height: "50px" }} /></td>
              <td>{product.name}</td>
              <td>${product.price}</td>
              <td>{product.description}</td>
              <td>{product.size}</td>
              <td>{product.stock ? "Sí" : "No"}</td>
              <td>
                <button className="button is-info is-small" onClick={() => handleEdit(product)}>
                  Modificar
                </button>
                <button className="button is-danger is-small ml-3" onClick={() => handleDelete(product.id)}>
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <a href="/" className="button is-primary">Home</a>
    </div>
  )
}

export { Dashboard }