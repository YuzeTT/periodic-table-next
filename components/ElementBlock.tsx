import classNames from 'classnames'
import { HTMLAttributes } from 'react'

export interface ElementProps {
  name: string
  name_chinese: string
  appearance: string | null
  atomic_mass: number
  boil: number | null
  category: string
  density: number | null
  discovered_by: string | null
  melt: number | null
  molar_heat: number | null
  named_by: string | null
  number: number
  period: number
  group: number
  phase: string
  source: string
  bohr_model_image: string | null
  bohr_model_3d: string | null
  spectral_img: string | null
  summary: string
  symbol: string
  xpos: number
  ypos: number
  wxpos: number
  wypos: number
  shells: number[]
  electron_configuration: string
  electron_configuration_semantic: string
  electron_affinity: number | null
  electronegativity_pauling: number | null
  ionization_energies: number[]
  cpk_hex: string | null
  image: {
    title: string
    url: string
    attribution: string
  }
  block: string
}

const ElementBlock = (element: ElementProps & HTMLAttributes<HTMLDivElement> & { number: number }) => {
  const color = (() => {
    switch (element.category) {
      case "diatomic nonmetal":
        return "bg-[#99ffc540] hover:bg-[#99ffc5] border-[#99ffc5] text-[#99ffc5] hover:text-black"
      case "noble gas":
        return "bg-[#bbffff40] hover:bg-[#bbffff] border-[#bbffff] text-[#bbffff] hover:text-black"
      case "alkali metal":
        return "bg-[#ff646740] hover:bg-[#ff6467] border-[#ff6467] text-[#ff6467] hover:text-white"
      case "alkaline earth metal":
        return "bg-[#ffddaf40] hover:bg-[#ffddaf] border-[#ffddaf] text-[#ffddaf] hover:text-black"
      case "metalloid":
        return "bg-[#cccc9b40] hover:bg-[#cccc9b] border-[#cccc9b] text-[#cccc9b] hover:text-white"
      case "polyatomic nonmetal":
        return "bg-[#99ffc540] hover:bg-[#99ffc5] border-[#99ffc5] text-[#99ffc5] hover:text-black"
      case "post-transition metal":
        return "bg-[#cccccc40] hover:bg-[#cccccc] border-[#cccccc] text-[#cccccc] hover:text-black"
      case "transition metal":
        return "bg-[#ffc0c040] hover:bg-[#ffc0c0] border-[#ffc0c0] text-[#ffc0c0] hover:text-black"
      case "lanthanide":
        return "bg-[#ffbffe40] hover:bg-[#ffbffe] border-[#ffbffe] text-[#ffbffe] hover:text-black"
      case "actinide":
        return "bg-[#ff99cb40] hover:bg-[#ff99cb] border-[#ff99cb] text-[#ff99cb] hover:text-black"
      default:
        return "bg-[#88888840] hover:bg-[#888888] border-[#888888] text-[#888888] hover:text-white"
    }
  })()

  return (
    <div
      className={classNames(
        'p-2',
        'h-24',
        'border',
        'duration-200',
        'hover:scale-125',
        'flex flex-col justify-between items-center',
        color
      )}
      style={element.style}
    >
      <div className="w-full flex justify-between text-sm -mb-1">
        <p>{(element.number).toString()}</p>
        <p>{element.symbol}</p>
      </div>
      <p className="font-bold text-2xl">{element.name_chinese}</p>
      <p className='text-xs'>{element.atomic_mass.toString()}</p>
    </div>
  )
}

export default ElementBlock
