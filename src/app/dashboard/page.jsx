'use client'

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
    <div>
      <h1>Dashboard</h1>
      <div className="flex justify-evenly items-center">
        {boards.length > 0 &&
          boards.map((board) => {
            return (
              <div className="border-2 rounded-md h-96" key={board.id}>
                <h2>{board.name}</h2>
              </div>
            )
          })}
      </div>
    </div>
  )
}
export default Dashboard
