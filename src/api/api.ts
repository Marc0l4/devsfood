import { products } from '@/data/products'
import { categories } from '@/data/categories'

const getAllCategories = () => {
  const json = categories
  return json
}

const getCategorie = (id: number) => {
  const json = categories.find((i) => i.id === id)
  return json ?? false
}

const getAllProducts = () => {
  const json = products
  return json
}

const getProduct = (id: number) => {
  const json = products.find((i) => i.id === id)
  return json ?? false
}

const getProdFromCat = (idCat: number) => {
  const json = products.filter((i) => i.id_cat === idCat)
  return json ?? false
}

const getProdFromSearch = (name: string) => {
  const json = products.filter((i) => i.name === name)
  return json ?? false
}

export {
  getAllCategories,
  getCategorie,
  getAllProducts,
  getProduct,
  getProdFromCat,
  getProdFromSearch,
}
