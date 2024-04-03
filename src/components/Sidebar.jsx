import { FiBell } from 'react-icons/fi'
import { MdOutlineAccountCircle } from 'react-icons/md'

const Sidebar = () => {
  const bellStyles = `my-3 scale-150 hover:text-indigo-900 hover:bg-slate-200 rounded-sm cursor-pointer`

  return (
    <div className="w-1/3 flex flex-row">
      <div className="w-1/3 border-2 flex flex-col items-center justify-between bg-indigo-900/90 text-gray-600 ">
        <div className="scale-125 my-3">
          <FiBell className={bellStyles} />
          <FiBell className={bellStyles} />
          <FiBell className={bellStyles} />
          <FiBell className={bellStyles} />
        </div>
        <div className="scale-125 my-3">
          <FiBell className={bellStyles} />
          <FiBell className={bellStyles} />
          <FiBell className={bellStyles} />
          <FiBell className={bellStyles} />
          <MdOutlineAccountCircle className="my-4 scale-150 hover:text-indigo-900 hover:bg-slate-200 rounded-sm cursor-pointer" />
        </div>
      </div>
      <div className="w-2/3 border-2">projects</div>
    </div>
  )
}
export default Sidebar
