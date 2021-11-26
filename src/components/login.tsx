import React, { FormEvent } from "react";
const baseurl = process.env.REACT_APP_API_URL;
export const Login: React.FC = () => {
  const loginHandler = (params: { userName: string, password: string }) => {
    fetch(`${baseurl}/login`, {
      method: 'post',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(params)
    }).then((res) => {
      return res.json()
    }).then((data) => {
      console.log(data)
    })
  }
  // console.log(baseurl);

  const submitHandle = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const userName = (event.currentTarget.elements[0] as HTMLInputElement).value
    const password = (event.currentTarget.elements[1] as HTMLInputElement).value
    loginHandler({
      userName,
      password
    })


  }
  return (
    <form onSubmit={submitHandle}>
      <label htmlFor="username">用户名</label>
      <input type="text" name="username" />
      <label htmlFor="password">密码</label>
      <input type="password" name="password" />
      <button type="submit">登录</button>
    </form>
  )
}
