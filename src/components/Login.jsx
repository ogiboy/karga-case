import UserContext from '@/context/users'
import { useRouter } from 'next/navigation'
import { useContext, useEffect, useState } from 'react'

const Login = () => {
  const { loginInfo, setLoginInfo, initialState } = useContext(UserContext)

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
      localStorage.setItem('token', data.data.token)

      if (!data.status) {
        throw new Error(data.messages)
      } else if (data.status) {
        setLoginInfo((prevInfo) => ({ ...prevInfo, token: data.data.token }))
        router.push('/dashboard')
      }
    } catch (error) {
      console.error(error)
    } finally {
      setLoginInfo((prevInfo) => ({ ...prevInfo, token: prevInfo.token }))
    }
  }

  const handleInputs = (e) => {
    // console.log(e)
    if (e.target.name === 'email') {
      setLoginInfo((prevInfo) => ({ ...prevInfo, email: e.target.value }))
    } else if (e.target.name === 'password') {
      setLoginInfo((prevInfo) => ({ ...prevInfo, password: e.target.value }))
    }
  }

  // useEffect(() => {
  //   console.log(loginInfo)
  // }, [loginInfo])

  return (
    <div className="w-2/3 min-h-42 mx-auto my-5 px-1 py-2 border rounded-md lg:w-1/3">
      <form onSubmit={(e) => handleSubmit(e)} className="h-full" action="">
        <fieldset className="py-2 w-full flex justify-evenly items-center text-center">
          <label className="w-2/5" htmlFor="email">
            Email{' '}
          </label>
          <input
            className="outline w-1/2 rounded-lg mx-2 px-2"
            id="email"
            type="email"
            onChange={(e) => handleInputs(e)}
            name="email"
            value={loginInfo.email}
            required
            autoComplete="email"
          />
        </fieldset>
        <fieldset className="py-2 w-full flex justify-evenly items-center text-center">
          <label className="w-2/5" htmlFor="password">
            Şifre{' '}
          </label>
          <input
            className="outline w-1/2 rounded-lg mx-2 px-2"
            id="password"
            type="password"
            onChange={(e) => handleInputs(e)}
            name="password"
            value={loginInfo.password}
            required
          />
        </fieldset>
        <hr />
        <div className="w-full h-14 flex justify-center items-center">
          <button className="h-10 w-20 border rounded-md">Giriş Yap</button>
        </div>
      </form>
    </div>
  )
}
export default Login
