import TaskItem from './TaskItem'

const Boards = ({ boards }) => {
  const buttons = ['Boards', 'List', 'Other', 'Other', 'Other']

  return (
    <div className="w-screen ">
      <div className="self-start">
        <h1>Frontend case</h1>
      </div>
      <div className="self-start flex ">
        {buttons.map((item) => (
          <button className="border first:rounded-l-lg last:rounded-r-lg py-1 px-2">
            {item}
          </button>
        ))}
      </div>
      <div className="border overflow-x-scroll overflow-y-hidden flex justify-evenly items-center">
        {boards.length > 0 &&
          boards.map((board) => {
            return (
              <div
                className="border-2 rounded-md min-w-52 h-96 mx-2 my-2 overflow-y-scroll"
                key={board.id}
              >
                <h2 className="py-1 px-2">
                  {board.name} {board.tasks.length}
                </h2>
                <div>
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
