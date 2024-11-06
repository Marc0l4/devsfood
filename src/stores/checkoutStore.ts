import { create } from 'zustand'

type States = {
  address: {
    name: string
    street: string
    number: string
    complement: string
    district: string
  }
}

type Action = {
  setAddress: (address: States['address']) => void
}

const initialState: States = {
  address: {
    name: '',
    street: '',
    number: '',
    complement: '',
    district: '',
  },
}

export const useCheckoutStore = create<States & Action>()((set) => ({
  ...initialState,
  setAddress: (address) => set((state) => ({ ...state, address })),
}))
