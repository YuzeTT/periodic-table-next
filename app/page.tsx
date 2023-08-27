import Legend from "./Legend"
import Element from "./Element"

export default function Home() {
  return (
    <div className="p-10">
      <Legend />
      <div className="my-4" />
      <div className="grid grid-cols-18 max-w-[1300px] mx-auto">
        {/* <Element number={1} en="H" zh="氢" aw={1.008} type="h" bl bt br />
        <div className="col-span-16" />
        <Element number={2} en="H" zh="氦" aw={4.0026} type="x" bl bt br />
        <Element number={3} en="Li" zh="锂" aw={6.94} type="j" bl bt br />
        <Element number={4} en="Be" zh="铍" aw={9.0122} type="jt" bt br />
        <div className="col-span-10" />
        <Element number={5} en="Be" zh="硼" aw={10.81} type="l" bl bt br /> */}
        <Element number={1} en="H" zh="氢" aw={1.008} type="h" bl bt br />
        <div className="col-span-16" />
        <Element number={2} en="He" zh="氦" aw={4.0026} type="x" bl bt br />

        <Element number={3} en="Li" zh="锂" aw={6.94} type="j" bl bt br />
        <Element number={4} en="Be" zh="铍" aw={9.0122} type="jt" bt br />
        <div className="col-span-10" />
        <Element number={5} en="B" zh="硼" aw={10.81} type="l" bl bt br />
        <Element number={6} en="C" zh="碳" aw={12.011} type="h" bl bt br />
        <Element number={7} en="N" zh="氮" aw={14.007} type="h" bl bt br />
        <Element number={8} en="O" zh="氧" aw={15.999} type="h" bl bt br />
        <Element number={9} en="F" zh="氟" aw={18.998} type="h" bl bt br />
        <Element number={10} en="Ne" zh="氖" aw={20.180} type="x" bl bt br />

        <Element number={11} en="Na" zh="钠" aw={22.990} type="j" bl bt br />
        <Element number={12} en="Mg" zh="镁" aw={24.305} type="jt" bt br />
        <div className="col-span-10" />
        <Element number={13} en="Al" zh="铝" aw={26.982} type="l" bl bt br />
        <Element number={14} en="Si" zh="硅" aw={28.086} type="l" bl bt br />
        <Element number={15} en="P" zh="磷" aw={30.974} type="h" bl bt br />
        <Element number={16} en="S" zh="硫" aw={32.066} type="h" bl bt br />
        <Element number={17} en="Cl" zh="氯" aw={35.453} type="h" bl bt br />
        <Element number={18} en="Ar" zh="氩" aw={39.948} type="x" bl bt br />

        <Element number={19} en="K" zh="钾" aw={39.098} type="j" bl bt br />
        <Element number={20} en="Ca" zh="钙" aw={40.078} type="jt" bt br />
        <Element number={21} en="Sc" zh="钪" aw={44.956} type="jt" bt br />
        <Element number={22} en="Ti" zh="钛" aw={47.867} type="jt" bt br />
        <Element number={23} en="V" zh="钒" aw={50.942} type="jt" bt br />
        <Element number={24} en="Cr" zh="铬" aw={52.000} type="jt" bt br />
        <Element number={25} en="Mn" zh="锰" aw={54.938} type="jt" bt br />
        <Element number={26} en="Fe" zh="铁" aw={55.845} type="jt" bt br />
        <Element number={27} en="Co" zh="钴" aw={58.933} type="jt" bt br />
        <Element number={28} en="Ni" zh="镍" aw={58.693} type="jt" bt br />
        <Element number={29} en="Cu" zh="铜" aw={63.546} type="jt" bt br />
        <Element number={30} en="Zn" zh="锌" aw={65.380} type="jt" bt br />
        <Element number={31} en="Ga" zh="镓" aw={69.723} type="l" bl bt br />
        <Element number={32} en="Ge" zh="锗" aw={72.630} type="l" bl bt br />
        <Element number={33} en="As" zh="砷" aw={74.922} type="h" bl bt br />
        <Element number={34} en="Se" zh="硒" aw={78.960} type="h" bl bt br />
        <Element number={35} en="Br" zh="溴" aw={79.904} type="h" bl bt br />
        <Element number={36} en="Kr" zh="氪" aw={83.798} type="x" bl bt br />
        <Element number={37} en="Rb" zh="铷" aw={85.468} type="j" bl bt br />
        <Element number={38} en="Sr" zh="锶" aw={87.620} type="jt" bt br />
        <Element number={39} en="Y" zh="钇" aw={88.906} type="jt" bt br />
        <Element number={40} en="Zr" zh="锆" aw={91.224} type="jt" bt br />
        <Element number={41} en="Nb" zh="铌" aw={92.906} type="jt" bt br />
        <Element number={42} en="Mo" zh="钼" aw={95.940} type="jt" bt br />
        <Element number={43} en="Tc" zh="锝" aw={98.000} type="jt" bt br />
        <Element number={44} en="Ru" zh="钌" aw={101.070} type="jt" bt br />
        <Element number={45} en="Rh" zh="铑" aw={102.905} type="jt" bt br />
        <Element number={46} en="Pd" zh="钯" aw={106.420} type="jt" bt br />
        <Element number={47} en="Ag" zh="银" aw={107.868} type="jt" bt br />
        <Element number={48} en="Cd" zh="镉" aw={112.411} type="jt" bt br />
        <Element number={49} en="In" zh="铟" aw={114.818} type="l" bl bt br />
        <Element number={50} en="Sn" zh="锡" aw={118.710} type="l" bl bt br />
        <Element number={51} en="Sb" zh="锑" aw={121.760} type="h" bl bt br />
        <Element number={52} en="Te" zh="碲" aw={127.600} type="h" bl bt br />
        <Element number={53} en="I" zh="碘" aw={126.904} type="h" bl bt br />
        <Element number={54} en="Xe" zh="氙" aw={131.293} type="x" bl bt br />
        <Element number={55} en="Cs" zh="铯" aw={132.905} type="j" bl bt br />
        <Element number={56} en="Ba" zh="钡" aw={137.327} type="jt" bt br />
        <div className="col-span-1" />
        {/* <Element number={57} en="La" zh="镧" aw={138.905} type="j" bt br />
        <Element number={58} en="Ce" zh="铈" aw={140.116} type="j" bt br />
        <Element number={59} en="Pr" zh="镨" aw={140.908} type="j" bt br />
        <Element number={60} en="Nd" zh="钕" aw={144.242} type="j" bt br />
        <Element number={61} en="Pm" zh="钷" aw={145.000} type="j" bt br />
        <Element number={62} en="Sm" zh="钐" aw={150.360} type="j" bt br />
        <Element number={63} en="Eu" zh="铕" aw={151.964} type="j" bt br />
        <Element number={64} en="Gd" zh="钆" aw={157.250} type="j" bt br />
        <Element number={65} en="Tb" zh="铽" aw={158.925} type="j" bt br />
        <Element number={66} en="Dy" zh="镝" aw={162.500} type="j" bt br />
        <Element number={67} en="Ho" zh="钬" aw={164.930} type="j" bt br />
        <Element number={68} en="Er" zh="铒" aw={167.259} type="j" bt br />
        <Element number={69} en="Tm" zh="铥" aw={168.934} type="j" bt br />
        <Element number={70} en="Yb" zh="镱" aw={173.054} type="j" bt br />
        <Element number={71} en="Lu" zh="镥" aw={174.967} type="j" bt br /> */}
        <Element number={72} en="Hf" zh="铪" aw={178.490} type="jt" bt br />
        <Element number={73} en="Ta" zh="钽" aw={180.948} type="jt" bt br />
        <Element number={74} en="W" zh="钨" aw={183.840} type="jt" bt br />
        <Element number={75} en="Re" zh="铼" aw={186.207} type="jt" bt br />
        <Element number={76} en="Os" zh="锇" aw={190.230} type="jt" bt br />
        <Element number={77} en="Ir" zh="铱" aw={192.217} type="jt" bt br />
        <Element number={78} en="Pt" zh="铂" aw={195.084} type="jt" bt br />
        <Element number={79} en="Au" zh="金" aw={196.967} type="jt" bt br />
        <Element number={80} en="Hg" zh="汞" aw={200.592} type="jt" bt br />
        <Element number={81} en="Tl" zh="铊" aw={204.383} type="l" bl bt br />
        <Element number={82} en="Pb" zh="铅" aw={207.200} type="l" bl bt br />
        <Element number={83} en="Bi" zh="铋" aw={208.980} type="l" bl bt br />
        <Element number={84} en="Po" zh="钋" aw={209.000} type="h" bl bt br />
        <Element number={85} en="At" zh="砹" aw={210.000} type="h" bl bt br />
        <Element number={86} en="Rn" zh="氡" aw={222.000} type="x" bl bt br />
        <Element number={87} en="Fr" zh="钫" aw={223.000} type="j" bl bt br />
        <Element number={88} en="Ra" zh="镭" aw={226.000} type="jt" bt br />
        <div className="col-span-1" />
        {/* <Element number={89} en="Ac" zh="锕" aw={227.000} type="j" bt br />
        <Element number={90} en="Th" zh="钍" aw={232.038} type="j" bt br />
        <Element number={91} en="Pa" zh="镤" aw={231.036} type="j" bt br />
        <Element number={92} en="U" zh="铀" aw={238.029} type="j" bt br />
        <Element number={93} en="Np" zh="镎" aw={237.000} type="j" bt br />
        <Element number={94} en="Pu" zh="钚" aw={244.000} type="j" bt br />
        <Element number={95} en="Am" zh="镅" aw={243.000} type="j" bt br />
        <Element number={96} en="Cm" zh="锔" aw={247.000} type="j" bt br />
        <Element number={97} en="Bk" zh="锫" aw={247.000} type="j" bt br />
        <Element number={98} en="Cf" zh="锎" aw={251.000} type="j" bt br />
        <Element number={99} en="Es" zh="锿" aw={252.000} type="j" bt br />
        <Element number={100} en="Fm" zh="镄" aw={257.000} type="j" bt br />
        <Element number={101} en="Md" zh="钔" aw={258.000} type="j" bt br />
        <Element number={102} en="No" zh="锘" aw={259.000} type="j" bt br />
        <Element number={103} en="Lr" zh="铹" aw={262.000} type="j" bt br />
        <div className="col-span-3" /> */}
        <Element number={104} en="Rf" zh="𬬻" aw={267.000} type="jt" bt br />
        <Element number={105} en="Db" zh="𬭊" aw={270.000} type="jt" bt br />
        <Element number={106} en="Sg" zh="𬭳" aw={271.000} type="jt" bt br />
        <Element number={107} en="Bh" zh="𬭛" aw={270.000} type="jt" bt br />
        <Element number={108} en="Hs" zh="𬭶" aw={277.000} type="jt" bt br />
        <Element number={109} en="Mt" zh="鿏" aw={276.000} type="jt" bt br />
        <Element number={110} en="Ds" zh="𫟼" aw={281.000} type="jt" bt br />
        <Element number={111} en="Rg" zh="𬬭" aw={280.000} type="jt" bt br />
        <Element number={112} en="Cn" zh="鎶" aw={285.000} type="jt" bt br />
      </div>
    </div>
  )
}
