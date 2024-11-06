import { Product } from '@/types/Product'

type Props = {
  data: Product
  onClick: (newData: Product) => void
}

export const ProductItem = ({ data, onClick }: Props) => {
  const handleOpenModal = () => {
    onClick(data)
  }

  return (
    <div
      onClick={handleOpenModal}
      className="my-5 flex cursor-pointer flex-col items-center rounded-md bg-white p-3 text-black shadow-2xl md:my-0 lg:flex-row"
    >
      <div className="w-48 transition-all ease-in-out hover:w-52 hover:transition-all hover:ease-in-out">
        <img src={data.image} alt={data.name} className="w-full rounded-md" />
      </div>
      <div className="mx-3 flex-1 text-menu-color">
        <p className="text-center text-xl font-bold lg:text-left">
          {data.name}
        </p>
        <p className="text-center lg:text-left">
          {data.price.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
        </p>
        <p className="">{data.ingredients}</p>
      </div>
      <div className="hidden w-10 lg:block">
        <img src="/assets/next.png" alt="next button" className="w-full" />
      </div>
    </div>
  )
}
