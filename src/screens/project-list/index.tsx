import React from 'react'
import apiUrl from 'json_server'
import { SearchPanel } from './search-panel'
import { List } from './list'
import { useEffect, useState } from 'react'
import { cleanObject, useMount, useDebounce } from 'utils'
import * as qs from 'qs'


export const ProjectListScreen = () => {
  const [param, setParam] = useState({
    name:'',
    personId: ''
  })
  const [users, setUsers] = useState([])
  const [list, setList] = useState([])
  let debounceParam = useDebounce(param, 200)
  useEffect(()=> {
    fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(debounceParam))}`).then(async res=>{
      if(res.ok){
        setList(await res.json())
      }
    })
  }, [debounceParam])
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