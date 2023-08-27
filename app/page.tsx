import ElementBlock from "@/components/ElementBlock"
import Legend from "./Legend"
import elements from "@/PeriodicTableJSON"

export default function Home() {
  return (
    <div className="p-10">
      <Legend />
      <div className="grid grid-cols-20 min-w-[1024px]">
        <div className="h-24 text-slate-200 font-bold text-2xl">
          <p>族→</p>
          <p>周期↓</p>
        </div>
        {Array(18).fill(null).map((_, i) => (
          <div key={i} className="flex justify-center items-end pb-4">
            <p className="text-slate-200 font-bold text-2xl">{i + 1}</p>
          </div>
        ))}
        {Array(7).fill(null).map((_, i) => (
          <div
            key={i}
            className="flex justify-end items-center pr-4"
            style={{
              gridRowStart: i + 2
            }}
          >
            <p className="text-slate-200 font-bold text-2xl">{i + 1}</p>
          </div>
        ))}
        {elements.map((element, i) => {
          if (56 < element.number && element.number < 72) return
          else if (88 < element.number && element.number < 104) return
          else return (
            <ElementBlock
              key={i}
              {...element}
              style={{
                gridColumnStart: element.group + 1,
                gridRowStart: element.period + 1,
              }}
            />
          )
        })}
        <div className="col-span-2 flex justify-center items-center" style={{
          gridColumnStart: 3,
          // 想要往下一行就+1 但是不能超过grid最大行数
          gridRowStart: 10
        }}>
          <p className="text-slate-200 font-bold text-2xl">镧系元素</p>
        </div>
        {elements.slice(56, 71).map((element, i) => (
          <ElementBlock {...element} style={{
            gridColumnStart: element.group + 2 + i,
            // 想要往下一行就+1 但是不能超过grid最大行数
            gridRowStart: element.period + 4,
          }} />
        ))}
        <div className="col-span-2 flex justify-center items-center" style={{
          gridColumnStart: 3,
          // 想要往下一行就+1 但是不能超过grid最大行数
          gridRowStart: 11
        }}>
          <p className="text-slate-200 font-bold text-2xl">锕系元素</p>
        </div>
        {elements.slice(88, 103).map((element, i) => (
          <ElementBlock {...element} style={{
            gridColumnStart: element.group + 2 + i,
            // 想要往下一行就+1 但是不能超过grid最大行数
            gridRowStart: element.period + 4
          }} />
        ))}
      </div>
    </div>
  )
}
