import { FaAngleDown } from 'react-icons/fa6'
import { FaAngleUp } from 'react-icons/fa6'
import { Transition } from '@headlessui/react'

const AccordionItem = ({ item, isOpen, handleAccordion }) => {
  const accordionItems = [
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
  ]

  const randomColor = () => {
    return '#' + (((1 << 24) * Math.random()) | 0).toString(16).padStart(6, '0')
  }

  console.log(randomColor())

  return (
    <div
      className="  py-2 px-1 my-2 cursor-pointer"
      onClick={() => handleAccordion(item.id)}
      key={item.id}
    >
      <h1 className="hover:bg-slate-100 rounded-md text-nowrap flex justify-between items-center">
        <span
          className="border w-2 h-2 rounded-lg"
          style={{ backgroundColor: randomColor() }}
        ></span>
        {item.name}{' '}
        <span>{isOpen === item.id ? <FaAngleUp /> : <FaAngleDown />}</span>
      </h1>
      <div>
        {accordionItems.map((items) => {
          return (
            <div key={items.id}>
              <Transition
                appear={true}
                show={isOpen === item.id}
                enter="transform transition duration-200"
                enterFrom="opacity-0 scale-50"
                enterTo="opacity-100 scale-100"
                leave="transform duration-200 transition ease-in-out"
                leaveFrom="opacity-100 scale-100 "
                leaveTo="opacity-0 scale-95 "
              >
                <p className="hover:bg-slate-100 rounded-md text-xs flex justify-between items-center">
                  {items.name} <span>{items.notf}</span>
                </p>
              </Transition>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default AccordionItem
