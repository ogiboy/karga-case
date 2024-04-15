const Modal = ({ item, onClose }) => {
  const { name, description } = item

  return (
    <div
      onClick={() => onClose()}
      className="bg-slate-300 top-0 left-0 absolute w-screen h-screen bg-opacity-55"
    >
      <div className="bg-slate-400 w-4/6 h-4/6 mx-auto my-28 flex justify-center items-center border-2 bg-opacity-75 rounded-md">
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  )
}
export default Modal
