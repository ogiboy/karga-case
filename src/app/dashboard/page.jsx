'use client'

import Boards from '@/components/Boards'
import Modal from '@/components/Modal'
import Sidebar from '@/components/Sidebar'
import UserContext from '@/context/context'

import { useContext, useEffect } from 'react'

const Dashboard = () => {
  const { fetchBoards, boards, addTask, isModalOpen } = useContext(UserContext)

  useEffect(() => {
    fetchBoards()
  }, [])

  useEffect(() => {
    console.log('modal state: ' + isModalOpen)
  }, [isModalOpen])

  return (
    <div className="w-screen h-screen overflow-x-hidden flex flex-row cursor-default text-indigo-800">
      <Sidebar />
      <Boards boards={boards} addTask={addTask} />
      {isModalOpen && <Modal />}
    </div>
  )
}
export default Dashboard
