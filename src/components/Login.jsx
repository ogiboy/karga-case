'use client'

import { useState } from 'react'

const Login = () => {
  const [loginInfo, setLoginInfo] = useState({
    username: '',
    password: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const handleInputs = (e) => {
    // console.log(e)
    if (e.target.name === 'username') {
      setLoginInfo((prevInfo) => ({ ...prevInfo, username: e.target.value }))
    } else if (e.target.name === 'password') {
      setLoginInfo((prevInfo) => ({ ...prevInfo, password: e.target.value }))
    }
  }

  return (
    <div className="w-2/3 min-h-42 mx-auto my-5 px-1 py-2 border rounded-md ">
      <form onSubmit={(e) => handleSubmit(e)} className="h-full" action="">
        <fieldset className="py-2 w-full flex justify-evenly items-center text-center">
          <label className="w-2/5" htmlFor="username">
            Kullanıcı adı{' '}
          </label>
          <input
            className="outline w-1/2 rounded-lg mx-2"
            id="username"
            type="text"
            onChange={(e) => handleInputs(e)}
            name="username"
            value={loginInfo.username}
          />
        </fieldset>
        <fieldset className="py-2 w-full flex justify-evenly items-center text-center">
          <label className="w-2/5" htmlFor="password">
            Şifre{' '}
          </label>
          <input
            className="outline w-1/2 rounded-lg mx-2"
            id="password"
            type="password"
            onChange={(e) => handleInputs(e)}
            name="password"
            value={loginInfo.password}
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
