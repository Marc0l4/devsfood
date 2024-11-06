import { Category } from '@/types/Category'

type Props = {
  data: Category
  activeCat: number
  setActiveCat: (newCat: number) => void
}

export const CategoryItem = ({ data, activeCat, setActiveCat }: Props) => {
  const handleCatClick = () => {
    setActiveCat(data.id)
  }

  return (
    <div
      // eslint-disable-next-line prettier/prettier
      className={`cursor-pointer flex h-16 w-16 items-center justify-center rounded-2xl 
        hover:bg-green-200 hover:transition-all hover:ease-in-out
        md:h-20 md:w-20
        ${activeCat === data.id ? 'bg-white' : 'bg-green-300'}`}
      onClick={handleCatClick}
    >
      <img
        src={data.image}
        alt={data.name}
        className="h-12 w-12 md:h-14 md:w-14"
      />
    </div>
  )
}
