'use client'

import Cookies from 'js-cookie'

import { useRouter } from 'next/navigation'
import { createContext, useState } from 'react'

const UserContext = createContext()

const initialState = {
  email: '',
  password: '',
  token: '',
}

function Provider({ children }) {
  const [loginInfo, setLoginInfo] = useState(initialState)
  const [boards, setBoards] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)

  const token = Cookies.get('token')
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const email = formData.get('email')
    const password = formData.get('password')

    try {
      const response = await fetch(
        'https://api.management.parse25proje.link/api/auth/login',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password }),
        }
      )
      const data = await response.json()
      // document.cookie = `token=${data.data.token}; path=/; HttpOnly; Secure`

      if (!data.status) {
        throw new Error(data.messages)
      } else if (data.status) {
        setLoginInfo((prevInfo) => ({ ...prevInfo, token: data.data.token }))
        // localStorage.setItem('token', data.data.token)
        Cookies.set('token', data.data.token, { expires: 1 })
        router.push('/dashboard')
      }
    } catch (error) {
      console.error(error)
    } finally {
      setLoginInfo((prevInfo) => ({ ...prevInfo, token: prevInfo.token }))
    }
  }

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

  const addTask = async (id) => {
    const taskName = prompt('Task ismi giriniz', 'Task')
    const taskDescription = prompt('Görev açıklaması giriniz.', 'Açıklama')
    const startDate = new Date()
    const endDate = new Date(startDate.getDate() + 5)

    const taskData = {
      name: taskName,
      description: taskDescription,
      boardId: id,
      flagId: id,
      startDate,
      endDate,
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
      fetchBoards()
    } catch (error) {
      console.error(error)
    }
  }

  const valuesToShare = {
    handleSubmit,
    loginInfo,
    setLoginInfo,
    initialState,
    fetchBoards,
    boards,
    addTask,
    isModalOpen,
    setIsModalOpen,
  }

  return (
    <UserContext.Provider value={valuesToShare}>
      {children}
    </UserContext.Provider>
  )
}

export { Provider }
export default UserContext
