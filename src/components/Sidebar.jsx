import { useState } from 'react'
import { FiBell } from 'react-icons/fi'
import { MdOutlineAccountCircle } from 'react-icons/md'
import { FaAngleDown } from 'react-icons/fa6'

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)

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
      id: 1,
      name: 'Proje İsmi 1',
    },
    {
      id: 2,
      name: 'Proje İsmi 2',
    },
    {
      id: 3,
      name: 'Proje İsmi 3',
    },
    {
      id: 4,
      name: 'Proje İsmi 4',
    },
  ]

  const bellStyles = `hover:text-indigo-900 hover:bg-slate-200 rounded-sm cursor-pointer scale-150 p-2 my-3 flex justify-center items-center`
  const halfIconCount = Math.ceil(icons.length / 2)
  const topIcons = icons.slice(0, halfIconCount)
  const bottomIcons = icons.slice(halfIconCount)

  const AccordionItem = ({ item, isOpen }) => {
    const accordionItems = [
      {
        id: 1,
        name: 'Overview',
        notf: 10,
      },
      {
        id: 2,
        name: 'Notifications',
        notf: 10,
      },
      {
        id: 3,
        name: 'Analytics',
        notf: 10,
      },
      {
        id: 4,
        name: 'Reports',
        notf: 10,
      },
    ]

    return (
      <div key={item.id}>
        <h1 className="text-nowrap flex justify-between items-center cursor-default">
          {item.name}{' '}
          <span>
            <FaAngleDown />
          </span>
        </h1>
        <div>
          {accordionItems.map((item) => {
            return (
              <div key={item.id}>
                <p className="text-xs flex justify-between items-center">
                  {item.name} <span>{item.notf}</span>
                </p>
              </div>
            )
          })}
        </div>
      </div>
    )
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
        <div>
          {projects.map((item) => (
            <AccordionItem item={item} />
          ))}
        </div>
      </div>
    </div>
  )
}
export default Sidebar
