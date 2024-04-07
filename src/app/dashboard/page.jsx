'use client'

import Boards from '@/components/Boards'
import Sidebar from '@/components/Sidebar'
import UserContext from '@/context/users'
import { useContext, useEffect, useState } from 'react'

const Dashboard = () => {
  const [boards, setBoards] = useState([])

  const { loginInfo } = useContext(UserContext)

  useEffect(() => {
    const fetchBoards = async () => {
      try {
        const response = await fetch(
          'https://api.management.parse25proje.link/api/boards',
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${loginInfo.token}`,
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

  return (
    <div className="w-screen h-screen flex flex-row cursor-default text-indigo-800">
      <Sidebar />

      <Boards boards={boards} />
    </div>
  )
}
export default Dashboard
