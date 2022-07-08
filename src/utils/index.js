export const cleanObject = (obj) => {
  const res = {...obj}
  Object.keys(obj).forEach(key => {
    const value = obj[key]
    if(!isFalsy(value)){
      delete res[key]
    }
  })
  return res
}

export const isFalsy = (value) => 
  value === 0 ? true : !!value