/* eslint-disable react-hooks/rules-of-hooks */
import { useCartStore } from '@/stores/cartStore'
import { useCheckoutStore } from '@/stores/checkoutStore'

export const generateMessage = () => {
  const { address } = useCheckoutStore((state) => state)
  const { cart } = useCartStore((state) => state)

  const orderProducts = []
  for (const item of cart) {
    orderProducts.push(`${item.quantity}x ${item.product.name}`)
  }

  return `**Dados do cliente**
Nome: ${address.name}
Endereço: ${address.street}, ${address.number} (${address.complement})
${address.district}
------
**Pedido**
${orderProducts.join('\n')}`
}
