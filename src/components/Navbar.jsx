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
          <Link to='/login' className='btn block bg-indigo-500'>
            Login
          </Link>
        </li>
        <li>
          <Link to='/signup' className='btn block'>
            Signup
          </Link>
        </li>
        <li>
          <button className='btn bg-red-500'>Logout</button>
        </li>
      </ul>
    </div>
  )
}
