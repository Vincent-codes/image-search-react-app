import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header'
import TextInput from './components/Input';
import SearchResult from './components/SearchResult';

export default function App() {
  const [datas, setData] = useState({
    results: []
  })
  const [value, setValue] = useState("cats")
  const accessKey = "tKCBi97KtR_WBVu5Z3FnNhI7hcDLX2JxNXOcGvBGEhE";
  const page = Math.floor(Math.random() * 100)

  useEffect(()=>{
    fetch(`https://api.unsplash.com/search/photos?page=${page}&query=${value}&client_id=${accessKey}`).then((res)=> res.json()).then((data)=> setData({results: data.results}))
  },[])

  const handleSearchButton = async() => {
    fetch(`https://api.unsplash.com/search/photos?page=${page}&query=${value}&client_id=${accessKey}`).then((res)=> res.json()).then((data)=> {
      setData({results: data.results})
      console.log(data)
    }).catch((err)=> console.log(err))
  }

  return (
    <div>
      <Header />
      <TextInput buttonClick={handleSearchButton} setValue={setValue} value={value} />
      <SearchResult datas={datas}  />
    </div>
  );
}
