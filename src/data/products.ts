import { Product } from '@/types/Product'

export const products: Product[] = [
  {
    id: 1,
    id_cat: 1,
    name: 'Torta de Chocolate',
    image: '/assets/tortachocolate.jpg',
    price: 12,
    ingredients: 'Cholate, chantily, pedaços de chocolate',
    points: 1,
  },
  {
    id: 2,
    id_cat: 2,
    name: 'Donuts de Flocos',
    image: '/assets/donutflocos.jpg',
    price: 8,
    ingredients: 'Granulado Colorido, cobertura rosa',
    points: 1,
  },
  {
    id: 3,
    id_cat: 1,
    name: 'Torta de Morango',
    image: '/assets/tortamorango.jpg',
    price: 14,
    ingredients: 'Morango, chantily, pedaços de morango',
    points: 1,
  },
  {
    id: 4,
    id_cat: 2,
    name: 'Donut de Chocolate',
    image: '/assets/donutchocolate.jpg',
    price: 6,
    ingredients: 'Cholate em calda',
    points: 1,
  },
  {
    id: 5,
    id_cat: 3,
    name: 'Cookie de Chocolate',
    image: '/assets/Chocolate-cookies.jpg',
    price: 10,
    ingredients: 'Cholate, pedaços de chocolate',
    points: 1,
  },
  {
    id: 6,
    id_cat: 3,
    name: 'Cookie de Morango',
    image: '/assets/cookie-morango.jpg',
    price: 13,
    ingredients: 'Morango, pedaços de morango',
    points: 1,
  },
]