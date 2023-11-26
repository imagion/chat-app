import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'
import { ChatBubbleLeftEllipsisIcon } from '@heroicons/react/24/outline'

export default function Navbar() {
  const { logout, isPending } = useLogout()
  const { user } = useAuthContext()

  return (
    <div className='flex justify-between items-center bg-neutral-400 p-2'>
      <Link to='/'>
        <ChatBubbleLeftEllipsisIcon className='h-12 w-12 text-indigo-500' />
      </Link>
      <ul className='flex gap-2 items-center'>
        {!user && (
          <>
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
          </>
        )}
        {user && (
          <>
            <li>Hello, {user.displayName}</li>
            <li>
              {!isPending && (
                <button className='btn bg-red-500' onClick={logout}>
                  Logout
                </button>
              )}
              {isPending && (
                <button
                  className='btn bg-neutral-500'
                  disabled
                  onClick={logout}>
                  Logging out...
                </button>
              )}
            </li>
          </>
        )}
      </ul>
    </div>
  )
}
