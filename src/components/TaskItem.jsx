import { CiCalendar } from 'react-icons/ci'

const TaskItem = ({ key, item }) => {
  const createdAt = new Date(item.createdAt).toLocaleDateString('tr-TR')
  const updatedAt = new Date(item.updatedAt).toLocaleDateString('tr-TR')

  return (
    <div
      className="border rounded-lg my-2 mx-1 h-32 p-1 flex flex-col justify-between items-start"
      key={key}
    >
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <p className="font-thin text-xs flex items-center justify-start first:mx-1">
        <span className="mx-1">
          <CiCalendar />
        </span>{' '}
        {createdAt} - {updatedAt}
      </p>
    </div>
  )
}
export default TaskItem
