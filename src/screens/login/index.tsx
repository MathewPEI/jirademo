import React, { useEffect } from 'react'
import apiUrl from 'json_server'

export const LoginScreen = () => {
  const login = (param: {username:string, password:string}) =>{
    fetch(`${apiUrl}/login?`, {
      method: 'POST',
      headers: {
        'content-Type':'application/json'
      },
      body: JSON.stringify(param)
    }).then(async res=>{
      if(res.ok){
      }
    })
  }
  const handleSubmit = (event:any)=>{
    event.preventDefault()
    const username = event.currentTarget.elements[0].value
    const password = event.currentTarget.elements[1].value
    login({username,password})
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">用户名</label>
        <input type="text" id={'username'}/>
      </div>
      <div>
        <label htmlFor="password">密码</label>
        <input type="password" id={'pwd'}/>
      </div>
      <button type={'submit'}>登录</button>
    </form>
  )
}