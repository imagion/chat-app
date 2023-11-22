import { Link } from 'react-router-dom'
import { ChatBubbleLeftEllipsisIcon } from '@heroicons/react/24/outline'

export default function Navbar() {
  return (
    <div className='flex justify-between items-center bg-neutral-400 p-2'>
      <Link to='/'>
        <ChatBubbleLeftEllipsisIcon className='h-12 w-12 text-indigo-500' />
      </Link>
      <ul className='flex gap-2'>
        <li>
          <Link
            to='/login'
            className='block rounded-xl bg-indigo-500 py-2 px-4'>
            Login
          </Link>
        </li>
        <li>
          <Link to='/signup' className='block rounded-xl py-2 px-4'>
            Signup
          </Link>
        </li>
        <li>
          <button className='rounded-xl bg-red-500 py-2 px-4'>Logout</button>
        </li>
      </ul>
    </div>
  )
}
