'use client'

import Boards from '@/components/Boards'
import Sidebar from '@/components/Sidebar'
import UserContext from '@/context/users'
import Cookies from 'js-cookie'

import { useContext, useEffect, useState } from 'react'

const Dashboard = () => {
  const [boards, setBoards] = useState([])

  // const token = localStorage.getItem('token')
  const token = Cookies.get('token')

  // console.log('login token: ' + token)

  useEffect(() => {
    const fetchBoards = async () => {
      try {
        const response = await fetch(
          'https://api.management.parse25proje.link/api/boards',
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
          }
        )
        if (!response.ok) {
          throw new Error('Board gelmedi :(')
        }

        const data = await response.json()
        setBoards(data.data)

        console.log(boards)
      } catch (error) {
        console.error(error)
      }
    }

    fetchBoards()
  }, [])

  useEffect(() => {
    console.log(boards)
  }, [boards])

  const addTask = async (id) => {
    const taskName = prompt('Task ismi giriniz', 'Task')
    const taskDescription = prompt('Görev açıklaması giriniz.', 'Açıklama')

    const taskData = {
      name: taskName,
      description: taskDescription,
      boardId: id,
      flagId: id,
      startDate: '2024-02-15T10:00:00',
      endDate: '2024-02-20T10:00:00',
    }

    try {
      const response = await fetch(
        'https://api.management.parse25proje.link/api/tasks',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(taskData),
        }
      )

      if (!taskName && !taskDescription) {
        throw new Error('Task girilmedi.')
      }

      if (!response.status) {
        throw new Error('Task iletilmedi')
      }

      const data = await response.json()
      console.log(data)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="w-screen h-screen overflow-x-hidden flex flex-row cursor-default text-indigo-800">
      <Sidebar />

      <Boards boards={boards} addTask={addTask} />
    </div>
  )
}
export default Dashboard
