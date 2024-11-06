'use client'

import { useCheckoutStore } from '@/stores/checkoutStore'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

type Props = {
  onClose: (status: boolean) => void
}

const addressSchema = z.object({
  name: z.string().min(2, 'Preencha o nome'),
  street: z.string().min(3, 'Preencha a rua'),
  number: z.string().min(1, 'Preencha o numero'),
  complement: z.string().min(1, 'Preencha o complemento'),
  district: z.string().min(2, 'Preencha o bairro'),
})

export const ModalAddress = ({ onClose }: Props) => {
  const address = useCheckoutStore((state) => state)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(addressSchema),
  })

  const [name, setName] = useState('')
  const [street, setStreet] = useState('')
  const [number, setNumber] = useState('')
  const [complement, setComplement] = useState('')
  const [district, setDistrict] = useState('')

  const handleSubmitForm = () => {
    address.setAddress({
      name,
      complement,
      district,
      number,
      street,
    })

    onClose(false)
  }

  return (
    <div className="flex w-72 flex-col justify-start md:w-auto">
      <form onSubmit={handleSubmit(handleSubmitForm)} className="w-full">
        <div className="">
          <input
            {...register('name')}
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            className={`mx-3 my-2 w-[270px] rounded-md border-2 md:w-[425px] ${errors.name ? 'border-red-500' : 'border-menu-color'} px-2 py-1`}
            placeholder="Nome"
          />
          {errors.name && (
            <p className="text-center text-red-500">
              {errors.name.message as string}
            </p>
          )}
        </div>
        <div className="">
          <div className="flex flex-col md:flex-row">
            <div>
              <input
                {...register('street')}
                value={street}
                onChange={(e) => setStreet(e.target.value)}
                type="text"
                className={`mx-3 my-2 w-[270px] rounded-md border-2 md:w-auto ${errors.street ? 'border-red-500' : 'border-menu-color'} px-2 py-1`}
                placeholder="Rua"
              />
              {errors.street && (
                <p className="text-center text-red-500">
                  {errors.street.message as string}
                </p>
              )}
            </div>
            <div className="">
              <input
                {...register('number')}
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                type="text"
                className={`mx-3 my-2 w-[270px] rounded-md border-2 md:w-auto ${errors.number ? 'border-red-500' : 'border-menu-color'} px-2 py-1`}
                placeholder="Numero"
              />
              {errors.number && (
                <p className="text-center text-red-500">Coloque um numero</p>
              )}
            </div>
          </div>
        </div>
        <div className="">
          <input
            {...register('complement')}
            value={complement}
            onChange={(e) => setComplement(e.target.value)}
            type="text"
            className={`mx-3 my-2 w-[270px] rounded-md border-2 md:w-[425px] ${errors.complement ? 'border-red-500' : 'border-menu-color'} px-2 py-1`}
            placeholder="Complemento"
          />
          {errors.complement && (
            <p className="text-center text-red-500">
              {errors.complement.message as string}
            </p>
          )}
        </div>
        <div className="">
          <input
            {...register('district')}
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
            type="text"
            className={`mx-3 my-2 w-[270px] rounded-md border-2 md:w-[425px] ${errors.district ? 'border-red-500' : 'border-menu-color'} px-2 py-1`}
            placeholder="Bairo"
          />
          {errors.district && (
            <p className="text-center text-red-500">
              {errors.district.message as string}
            </p>
          )}
        </div>
        <div className="my-3 flex items-center justify-center">
          <button className="w-52 rounded-lg border bg-menu-color px-2 py-1 font-bold text-white">
            Adicionar endereço
          </button>
        </div>
      </form>
    </div>
  )
}
