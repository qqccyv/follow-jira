import React, { FormEvent } from "react";
import { login } from "../auth-provider";

export const Login: React.FC = () => {

  // console.log(baseurl);

  const submitHandle = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const username = (event.currentTarget.elements[0] as HTMLInputElement).value
    const password = (event.currentTarget.elements[1] as HTMLInputElement).value
    login({
      username,
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
