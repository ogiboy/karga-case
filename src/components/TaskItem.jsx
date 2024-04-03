const TaskItem = ({ key, item }) => {
  return (
    <div className="border rounded-lg my-2 mx-1 h-32" key={key}>
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <p>{item.createdAt}</p>
    </div>
  )
}
export default TaskItem
