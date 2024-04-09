'use client'

import Boards from '@/components/Boards'
import Modal from '@/components/Modal'
import Sidebar from '@/components/Sidebar'
import UserContext from '@/context/context'

import { useContext, useEffect } from 'react'

const Dashboard = () => {
  const { fetchBoards, boards, addTask } = useContext(UserContext)

  useEffect(() => {
    fetchBoards()
  }, [])

  useEffect(() => {
    console.log(boards)
  }, [boards])

  return (
    <div className="w-screen h-screen overflow-x-hidden flex flex-row cursor-default text-indigo-800">
      <Sidebar />
      <Boards boards={boards} addTask={addTask} />
    </div>
  )
}
export default Dashboard
