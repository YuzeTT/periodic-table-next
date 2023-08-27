import React from 'react'

export default function Legend() {
  return (
    <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-10 text-white">
      <div className="flex items-center">
        <div className="border h-3 w-3 rounded-full border-green-500 mr-2"></div>
        <div className="opacity-80 text-sm">活泼非金属</div>
      </div>
      <div className="flex items-center">
        <div className="border h-3 w-3 rounded-full border-purple-500 mr-2"></div>
        <div className="opacity-80 text-sm">稀有气体</div>
      </div>
      <div className="flex items-center">
        <div className="border h-3 w-3 rounded-full border-cyan-500 mr-2"></div>
        <div className="opacity-80 text-sm">类金属</div>
      </div>
      <div className="flex items-center">
        <div className="border h-3 w-3 rounded-full border-orange-500 mr-2"></div>
        <div className="opacity-80 text-sm">过渡金属</div>
      </div>
      <div className="flex items-center">
        <div className="border h-3 w-3 rounded-full border-lime-500 mr-2"></div>
        <div className="opacity-80 text-sm">镧系元素</div>
      </div>
      <div className="flex items-center">
        <div className="border h-3 w-3 rounded-full border-red-500 mr-2"></div>
        <div className="opacity-80 text-sm">锕系元素</div>
      </div>
      <div className="flex items-center">
        <div className="border h-3 w-3 rounded-full border-yellow-500 mr-2"></div>
        <div className="opacity-80 text-sm">碱土金属</div>
      </div>
      <div className="flex items-center">
        <div className="border h-3 w-3 rounded-full border-amber-500 mr-2"></div>
        <div className="opacity-80 text-sm">碱金属</div>
      </div>
    </div>
  )
}
