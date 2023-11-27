import { useCollection } from '../../hooks/useCollection'

export default function MessagesList({ messages, user }) {
  const { error, documents } = useCollection('users')

  return (
    <ul className='flex flex-col flow-sm'>
      {messages.map(message => (
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
