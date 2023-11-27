import { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Sidebar() {
  const [chat, setChat] = useState(null)

  return (
    <div className='basis-64 content-start pl-4 pt-4 pb-4 bg-neutral-200 flow-lg'>
      <h2 className='text-xl'>Channels</h2>
      <div className='flex flex-col pl-4 text-neutral-600'>
        <NavLink
          to='chats/games'
          onClick={() => setChat('games')}
          className='chat p-2'>
          #Games
        </NavLink>
        <NavLink
          to='chats/sport'
          onClick={() => setChat('sport')}
          className='chat p-2'>
          #Sport
        </NavLink>
        <NavLink
          to='chats/hobby'
          onClick={() => setChat('hobby')}
          className='chat p-2'>
          #Hobby
        </NavLink>
      </div>
    </div>
  )
}
