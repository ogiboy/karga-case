import { useState } from 'react'
import { FiBell } from 'react-icons/fi'
import { MdOutlineAccountCircle } from 'react-icons/md'
import { IoStatsChartSharp } from 'react-icons/io5'
import AccordionItem from './AccordionItem'

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(null)

  const [accordionItems, setAccordionItems] = useState([
    {
      id: 11,
      name: 'Overview',
      notf: 10,
    },
    {
      id: 22,
      name: 'Notifications',
      notf: 10,
    },
    {
      id: 33,
      name: 'Analytics',
      notf: 10,
    },
    {
      id: 44,
      name: 'Reports',
      notf: 10,
    },
  ])

  const icons = [
    {
      id: 1,
      icon: <FiBell />,
    },
    {
      id: 2,
      icon: <FiBell />,
    },
    {
      id: 3,
      icon: <FiBell />,
    },
    {
      id: 4,
      icon: <FiBell />,
    },
    {
      id: 5,
      icon: <FiBell />,
    },
    {
      id: 6,
      icon: <FiBell />,
    },
    {
      id: 7,
      icon: <FiBell />,
    },
    {
      id: 8,
      icon: <FiBell />,
    },
    {
      id: 9,
      icon: <MdOutlineAccountCircle />,
    },
  ]

  const projects = [
    {
      id: 10,
      name: 'Proje İsmi 1',
    },
    {
      id: 20,
      name: 'Proje İsmi 2',
    },
    {
      id: 30,
      name: 'Proje İsmi 3',
    },
    {
      id: 40,
      name: 'Proje İsmi 4',
    },
  ]

  const bellStyles = `hover:text-indigo-900 hover:bg-slate-200 rounded-sm cursor-pointer scale-150 p-2 my-3 flex justify-center items-center`
  const halfIconCount = Math.ceil(icons.length / 2)
  const topIcons = icons.slice(0, halfIconCount)
  const bottomIcons = icons.slice(halfIconCount)

  const handleAccordion = (itemId) => {
    console.log(itemId)
    setIsOpen((prev) => (prev === itemId ? null : itemId))
  }

  return (
    <div className="w-1/3 flex flex-row">
      <div className="w-2/5 px-3 flex flex-col items-center justify-between bg-indigo-900/90 text-gray-600 ">
        <div className="">
          {topIcons.map((icon) => (
            <button className={bellStyles} key={icon.id}>
              {icon.icon}
            </button>
          ))}
        </div>
        <div className="">
          {bottomIcons.map((icon) => (
            <button className={bellStyles} key={icon.id}>
              {icon.icon}
            </button>
          ))}
        </div>
      </div>
      <div className="w-3/5 mx-5">
        <div className="py-5 flex justify-start items-start">
          <h1 className="mx-2 text-lg">Projeler</h1>
        </div>
        <div className="flex flex-col justify-between items-center w-full">
          {projects.map((item) => (
            <AccordionItem
              item={item}
              isOpen={isOpen}
              handleAccordion={handleAccordion}
              accordionItems={accordionItems}
            />
          ))}
        </div>
        <div className="flex justify-evenly items-center py-2 font-thin text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-md cursor-pointer">
          <IoStatsChartSharp />
          <p>Proje Oluştur</p>
        </div>
      </div>
    </div>
  )
}
export default Sidebar
