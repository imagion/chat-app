import { useParams } from 'react-router-dom'

export default function MessagesList({ messages, user }) {
  const { id } = useParams()
  const filtered = messages.filter(message => message.chatRoom === id)

  return (
    <ul className='flex flex-col flow-sm'>
      {filtered.map(message => (
        <li
          key={message.id}
          className='flex items-center bg-white rounded-full shadow'>
          <img
            src={user.photoURL} /* FIX */
            className='row-span-2 rounded-full w-12 h-12 mr-2'
          />
          <div>
            <p className='text-lg font-medium text-indigo-500'>
              {user.displayName} {/* FIX */}
            </p>
            <p className='content '>{message.message}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}
