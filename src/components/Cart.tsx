'use client'

import { useCartStore } from '@/stores/cartStore'
import { useState } from 'react'
import { Modal } from './Modal'
import { ModalAddress } from './ModalAddress'
import { useCheckoutStore } from '@/stores/checkoutStore'
import { generateMessage } from '@/utils/generateMessage'
import Link from 'next/link'

export const Cart = () => {
  const { cart, upsertCartItem } = useCartStore((state) => state)
  const { address } = useCheckoutStore((state) => state)

  const [show, setShow] = useState(false)
  const [modalAddress, setModalAddress] = useState(false)

  if (!cart) return false

  let subtotal = 0
  for (const item of cart) {
    subtotal += item.quantity * item.product.price
  }

  const handleCartClick = () => {
    setShow(!show)
  }

  const handleProductChange = (id: number, type: '-' | '+') => {
    const products = cart
    const prod = products.find((i) => i.product.id === id)
    if (prod) {
      switch (type) {
        case '+':
          return upsertCartItem(prod.product, 1)
        case '-':
          return upsertCartItem(prod.product, -1)
      }
    }
  }

  const message = generateMessage()
  const linkZap = `https://wa.me//${process.env.NEXT_PUBLIC_ZAP}?text=${encodeURI(message)}`

  return (
    <div className="fixed bottom-0 right-4 overflow-y-auto rounded-tl-xl rounded-tr-xl bg-menu-color md:right-8">
      <div
        onClick={handleCartClick}
        className={`flex h-12 w-72 items-center ${show ? 'justify-between' : 'justify-normal'}`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/cart.png" alt="" className="mx-3 h-auto w-6" />
        <p className="flex-1 cursor-pointer text-lg text-white">
          Meu Carrinho ({cart.length})
        </p>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        {show && (
          <img
            src="/assets/down.png"
            alt=""
            className="mr-3 block h-auto w-6"
          />
        )}
      </div>
      {show && cart.length <= 0 && (
        <div className="my-3 text-center">Seu carrinho esta vazio</div>
      )}
      {show && cart.length >= 1 && (
        <div className="w-[350px]">
          {cart.map((i) => (
            <div key={i.product.id} className="m-3 flex">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={i.product.image}
                alt={i.product.name}
                className="h-auto w-24 rounded-lg"
              />
              <div className="ml-3 flex-1">
                <p className="font-bold">{i.product.name}</p>
                <p className="">
                  {i.product.price.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
                </p>
              </div>
              <div className="ml-3 flex items-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  onClick={() => handleProductChange(i.product.id, '-')}
                  src="/assets/minus.png"
                  alt=""
                  className="h-auto w-3 cursor-pointer"
                />
                <p className="mx-2">{i.quantity}</p>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  onClick={() => handleProductChange(i.product.id, '+')}
                  src="/assets/plus.png"
                  alt=""
                  className="h-auto w-3 cursor-pointer"
                />
              </div>
            </div>
          ))}
          {address.name === '' && (
            <div className="my-4 flex justify-center">
              <button
                onClick={() => setModalAddress(true)}
                className="rounded-lg border bg-white px-2 py-1 font-bold text-menu-color"
              >
                Adicionar endereço
              </button>
            </div>
          )}
          {address.name !== '' && (
            <div className="m-3 flex items-center justify-between border-t border-white">
              <div className="mt-2">
                <p className="text-lg font-bold">{address.name}</p>
                <div className="flex flex-col gap-x-4 md:flex-row">
                  <p className="">Rua: {address.street}</p>
                  <p className="">N°: {address.number}</p>
                </div>
                <p className="">
                  Complemento:
                  <span className="ml-2">{address.complement}</span>
                </p>
                <p className="">
                  Bairro: <span className="ml-1">{address.district}</span>
                </p>
              </div>
              <div className="">
                <button
                  onClick={() => setModalAddress(true)}
                  className="rounded-lg border bg-white px-2 py-1 font-bold text-menu-color"
                >
                  Editar
                </button>
              </div>
            </div>
          )}
          <div className="m-3 border-t border-white">
            <div className="my-3 flex items-center justify-between">
              <h1 className="text-lg">SubTotal:</h1>
              <p className="">
                {subtotal.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </p>
            </div>
            {address.name !== '' && (
              <div className="flex items-center justify-center">
                <button className="rounded-lg border bg-white px-2 py-1 font-bold text-menu-color">
                  <Link target="_blank" href={linkZap}>
                    Enviar Pedido
                  </Link>
                </button>
              </div>
            )}
          </div>
        </div>
      )}
      {modalAddress && (
        <Modal onClose={setModalAddress} status={modalAddress}>
          <ModalAddress onClose={setModalAddress} />
        </Modal>
      )}
    </div>
  )
}
