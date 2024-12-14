const getStoreData = () => {
   const getStrData = localStorage.getItem('cook')
   if (getStrData) {
      return JSON.parse(getStrData)
   }
   return []
}

const saveToLs = (cook) => {
   const cookStringify = JSON.stringify(cook)
   localStorage.setItem('cook', cookStringify)
}

const addToLs = (id) => {
   const cook = getStoreData()
   cook.push(id)
   saveToLs(cook)
}

export {addToLs, getStoreData}