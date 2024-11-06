import { Product } from './Product'

export type ProductCart = Product & {
  qt: number
}
