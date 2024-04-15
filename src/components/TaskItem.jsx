import UserContext from '@/context/context'
import Modal from './Modal'

import { useContext, useEffect, useRef, useState } from 'react'
import { CiCalendar } from 'react-icons/ci'

const TaskItem = ({ item }) => {
  const { isModalOpen, setIsModalOpen } = useContext(UserContext)

  const createdAt = new Date(item.createdAt).toLocaleDateString('tr-TR')
  const updatedAt = new Date(item.updatedAt).toLocaleDateString('tr-TR')

  const modalRef = useRef()

  const handleModal = (id) => {
    setIsModalOpen(id)
  }

  const onClose = () => {
    setIsModalOpen(null)
  }

  return (
    <>
      <div
        onClick={() => handleModal(item.id)}
        className="border rounded-lg my-2 mx-1 h-32 p-1 flex flex-col justify-between items-start cursor-pointer"
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
      {isModalOpen === item.id && (
        <div>
          <Modal item={item} onClose={onClose} />
        </div>
      )}
    </>
  )
}
export default TaskItem
