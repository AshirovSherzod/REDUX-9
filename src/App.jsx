import { useState } from 'react'
import Header from './components/header'
import Cards from './components/cards'


function App() {
  const [search, setSearch] = useState("")
  console.log(search);
  return (
    <>
      <Header  search={search} setSearch={setSearch}/>
      <Cards  search={search}/>
    </>
  )
}

export default App
