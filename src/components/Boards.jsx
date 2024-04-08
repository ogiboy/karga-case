import TaskItem from './TaskItem'

import { useState } from 'react'

const Boards = ({ boards }) => {
  const [currentTab, setCurrentTab] = useState(1)

  const buttons = [
    {
      id: 1,
      name: 'Boards',
    },
    {
      id: 2,
      name: 'List',
    },
    {
      id: 3,
      name: 'Other',
    },
    {
      id: 4,
      name: 'Other',
    },
    {
      id: 5,
      name: 'Other',
    },
  ]

  return (
    <div className="w-screen bg-slate-50">
      <div className="self-start font-semibold text-2xl text-indigo-900 p-10">
        <h1>Frontend case</h1>
      </div>
      <div className="self-start px-10">
        {buttons.map((item) => (
          <button
            key={item.id}
            className={`${
              item.id === currentTab
                ? 'text-indigo-800 font-semibold'
                : 'text-slate-600'
            } text-slate-600 hover:bg-slate-50 hover:text-slate-800 bg-white border first:rounded-l-lg last:rounded-r-lg py-1 px-4`}
            onClick={() => setCurrentTab(item.id)}
          >
            {item.name}
          </button>
        ))}
      </div>
      <div className="overflow-x-scroll overflow-y-hidden flex justify-evenly items-center my-5 mx-2">
        {boards.length > 0 &&
          boards.map((board) => {
            return (
              <div
                className="border-2 bg-white rounded-md min-w-52 h-96 mx-5 my-2 p-1 overflow-y-scroll"
                key={board.id}
              >
                <h2 className="py-1 px-2">
                  {board.name} {board.tasks.length}
                </h2>
                <div className="m-1">
                  {board.tasks.length > 0 &&
                    board.tasks.map((item) => (
                      <TaskItem key={item.id} item={item} />
                    ))}
                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
}
export default Boards
