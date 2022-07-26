import { useEffect,useState } from "react"

export const cleanObject = (obj:object) => {
  const res = {...obj}
  Object.keys(obj).forEach(key => {
    // @ts-ignore
    const value = obj[key]
    if(!isFalsy(value)){
      // @ts-ignore
      delete res[key]
    }
  })
  return res
}

export const isFalsy = (value:unknown) => 
  value === 0 ? true : !!value



export const useMount = (callback:()=>void)=>{
  useEffect(()=>{
    callback()
  },[])
}


export const useDebounce = (value:any, delay?:number) => {
  const [debouncedValue,setDebouncedValue] = useState(value)

  useEffect(()=>{
    const timeout = setTimeout(()=> setDebouncedValue(value),delay)
    return ()=> clearTimeout(timeout)
  },[value,delay])

  return debouncedValue
}