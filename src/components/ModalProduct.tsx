'use client'

import { useCartStore } from '@/stores/cartStore'
import { Product } from '@/types/Product'
import { useEffect, useState } from 'react'

type Props = {
  data: Product
  onClose: (newStatus: boolean) => void
}

export const ModalProduct = ({ data, onClose }: Props) => {
  const { upsertCartItem } = useCartStore((state) => state)
  // const cart = useCart()

  const [qt, setQt] = useState(1)

  useEffect(() => {
    setQt(1)
  }, [data])

  if (!data) return false

  const handleMinusQt = () => {
    if (qt > 1) {
      setQt(qt - 1)
    }
  }

  const handlePlusQt = () => {
    setQt(qt + 1)
  }

  const handleAddCart = () => {
    upsertCartItem(data, qt)

    onClose(false)
  }

  return (
    <div className="w-80 px-2 py-3 text-menu-color md:w-[680px] md:p-3 lg:w-[740px]">
      <div className="flex flex-col items-center md:flex-row">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={data.image}
          alt={data.name}
          className="w-52 rounded-xl md:w-72 lg:w-80"
        />
        <div className="ml-3 flex flex-1 flex-col justify-between">
          <div className="h-12">
            <div className="text-2xl font-bold md:text-3xl">{data.name}</div>
            <div className="text-sm">{data.ingredients}</div>
          </div>
          <div className="my-2 flex h-12 justify-between">
            <div className="flex items-center">
              <div className="flex h-auto w-8 items-center justify-center rounded-full bg-menu-color p-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  onClick={handleMinusQt}
                  src="/assets/minus.png"
                  alt=""
                  className="h-auto w-6 cursor-pointer"
                />
              </div>
              <p className="mx-4 text-xl">{qt}</p>
              <div className="flex h-auto w-8 items-center justify-center rounded-full bg-menu-color p-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  onClick={handlePlusQt}
                  src="/assets/plus.png"
                  alt=""
                  className="h-auto w-6 cursor-pointer"
                />
              </div>
            </div>
            <div className="mt-2 text-2xl font-bold md:text-3xl">
              R$ {data.price * qt},00
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-12 items-end justify-center text-white md:justify-end">
        <button
          onClick={() => onClose(false)}
          className="flex h-10 items-center justify-center rounded-md bg-menu-color px-3 py-2 font-bold shadow-md hover:shadow-black hover:transition-all hover:ease-in-out md:p-3 md:text-lg"
        >
          Cancelar
        </button>
        <button
          onClick={handleAddCart}
          className="ml-2 rounded-md bg-menu-color px-3 py-2 font-bold shadow-md transition-all ease-in-out hover:shadow-black hover:transition-all hover:ease-in-out md:ml-5 md:p-3 md:text-xl"
        >
          Adicionar ao Carrinho
        </button>
      </div>
    </div>
  )
}
