'use client'

import { Header } from '@/components/Header'
import { useEffect, useState } from 'react'

import * as api from '@/api/api'
import { Category } from '@/types/Category'
import { CategoryItem } from '@/components/CategoryItem'
import { Product } from '@/types/Product'
import { ProductItem } from '@/components/ProductItem'
import { Modal } from '@/components/Modal'
import { ModalProduct } from '@/components/ModalProduct'

const Page = () => {
  const [categories, setCategories] = useState<Category[]>()
  const [products, setProducts] = useState<Product[]>([])
  const [activeCat, setActiveCat] = useState(0)
  const [modalStatus, setModalStatus] = useState(false)
  const [modalData, setModalData] = useState<Product>()

  const getProducts = () => {
    const prods = api.getAllProducts()
    if (prods) setProducts(prods)
  }

  const getProdForCat = (idCat: number) => {
    const prods = api.getProdFromCat(idCat)
    if (prods) setProducts(prods)
  }

  const handleProdClick = (data: Product) => {
    setModalStatus(true)
    setModalData(data)
  }

  useEffect(() => {
    const getCategories = () => {
      const categoriesList = api.getAllCategories()
      if (categoriesList !== undefined) setCategories(categoriesList)
    }
    getCategories()
  }, [categories])

  useEffect(() => {
    setProducts([])
    getProducts()
    if (activeCat !== 0) {
      setProducts([])
      getProdForCat(activeCat)
    }
  }, [activeCat])

  return (
    <div className="w-full p-4">
      <Header />
      {categories && categories.length > 0 && (
        <div className="mt-5">
          Selecione uma categoria
          <div className="mt-3 flex gap-3">
            <CategoryItem
              data={{
                id: 0,
                name: 'Todas as categorias',
                image: '/assets/food-and-restaurant.png',
              }}
              activeCat={activeCat}
              setActiveCat={setActiveCat}
            />
            {categories.map((i) => (
              <CategoryItem
                key={i.id}
                data={i}
                activeCat={activeCat}
                setActiveCat={setActiveCat}
              />
            ))}
          </div>
        </div>
      )}

      {products && products.length > 0 && (
        <div className="my-5">
          <div className="md:grid md:grid-cols-2 md:gap-5 lg:grid-cols-3">
            {products.map((i) => (
              <ProductItem onClick={handleProdClick} key={i.id} data={i} />
            ))}
          </div>
        </div>
      )}
      {modalData && (
        <Modal status={modalStatus} onClose={setModalStatus}>
          <ModalProduct data={modalData} onClose={setModalStatus} />
        </Modal>
      )}
    </div>
  )
}

export default Page
