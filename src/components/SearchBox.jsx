"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';

export default function SearchBox() {
  const[search, setSearch] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
   
    if(!search) return;
    router.push(`/search/${search}`)
  }

  

  return (
    <form className='flex' onSubmit={handleSubmit}>
        <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" name="" id="" placeholder='Search Keywords...' className='py-2 px-4 w-full border-gray-300 rounded-lg outline-none bg-transparent  focus:border-amber-500'/>
      <button type='submit' className={` ${search.length === 0 ? "text-white" : "text-amber-500"}`} disabled={search.length === 0}> Search</button>
    </form>
  )
}
