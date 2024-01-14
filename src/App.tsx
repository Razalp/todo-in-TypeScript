
  import { useState } from 'react'
import './App.css'
  import ImageHeader from './componets/ImageHeader'
  import './index.css'
  function App() {
    const [items,setItems]=useState<string[]>([])
    const [input,setInput]=useState('')
    const handleSubmit = (event:React.FormEvent) => {
      event.preventDefault();
      setItems((prev:string[]) => [...prev, input]);
      setInput('')
    };

    const handleDelete=(value:string)=>{
      setItems(prev=>prev.filter(date=>date!==value))
    }
    
    return ( 
      <>
    <h1 className='text-3xl'>TodoList Using TypeScript</h1>
    <div className='h-[100vh] flex flex-col justify-center items-center'>
      <div>
  <ImageHeader/>
  </div>
  <div className='w-[350px]'>
    <form onSubmit={handleSubmit} className='mb-5'> 
      <input type="text" value={input} className='w-full p-2 rounded-sm' onChange={(event)=>setInput(event.target.value)} />
      <button type='submit' className='bg-gray-700 w-full'>Add</button>
    </form>
    {items.map(data =>(
      <div key={data} className='flex justify-between'>
        <p>{data}</p>
        <button onClick={()=>handleDelete(data)}>❌</button>
      </div>
    ))}
  </div>
</div>

      </>
    )
  }

  export default App
