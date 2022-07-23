import React from 'react'
import apiUrl from 'json_server'
import { SearchPanel } from './search-panel'
import { List } from './list'
import { useEffect, useState } from 'react'
import { cleanObject, useMount } from 'utils'
import * as qs from 'qs'

export const ProjectListScreen = () => {
  const [param, setParam] = useState({
    name:'',
    personId: ''
  })
  const [users, setUsers] = useState([])
  const [list, setList] = useState([])
  useEffect(()=> {
    fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(param))}`).then(async res=>{
      if(res.ok){
        setList(await res.json())
      }
    })
  }, [param])
  useMount(()=>{
    fetch(`${apiUrl}/users`).then(async res=>{
      if(res.ok){
        setUsers(await res.json())
      }
    })
  })
  return <div>
    <SearchPanel param={param} setParam={setParam} users={users}></SearchPanel>
    <List list={list} users={users}></List>
  </div>
}