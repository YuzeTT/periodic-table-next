import classNames from "classnames"

const legends: {
  label: string
  color: string
}[] = [
    {
      label: "非金属",
      color: 'bg-[#99ffc540] border-[#99ffc5]'
    }, {
      label: "稀有气体",
      color: 'bg-[#bbffff40] border-[#bbffff]'
    }, {
      label: "碱金属",
      color: 'bg-[#ff646740] border-[#ff6467]'
    }, {
      label: "碱土金属",
      color: 'bg-[#ffddaf40] border-[#ffddaf]'
    }, {
      label: "类金属",
      color: 'bg-[#cccc9b40] border-[#cccc9b]'
    }, {
      label: "非金属",
      color: 'bg-[#99ffc540] border-[#99ffc5]'
    }, {
      label: "主族金属",
      color: 'bg-[#cccccc40] border-[#cccccc]'
    }, {
      label: "过渡金属",
      color: 'bg-[#ffc0c040] border-[#ffc0c0]'
    }, {
      label: "镧系元素",
      color: 'bg-[#ffbffe40] border-[#ffbffe]'
    }, {
      label: "锕系元素",
      color: 'bg-[#ff99cb40] border-[#ff99cb]'
    }]

const Legend = () => {
  return (
    <div className="grid grid-cols-10 gap-4 mx-24 mb-16">
      {legends.map((legend, i) => (
        <div key={i} className="flex items-center gap-4">
          <div className={classNames(
            'h-8 w-8',
            'border',
            legend.color
          )} />
          <p className="text-white opacity-80">{legend.label}</p>
        </div>
      ))}
    </div>
  )
}

export default Legend