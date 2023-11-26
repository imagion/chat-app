import { useCollection } from '../hooks/useCollection'

export default function Users() {
  const { error, documents } = useCollection('users')

  return (
    <div className='basis-64 bg-neutral-200 p-4 flow-lg'>
      <h2 className='text-xl'>All Users</h2>
      {error && <div className='text-red-600'>{error}</div>}
      {documents &&
        documents.map(user => (
          <div key={user.id} className='user flex gap-3 items-center'>
            {user.online && (
              <span className='bg-green-500 rounded-full w-2 h-2'></span>
            )}
            <img src={user.photoURL} className='rounded-full w-12 h-12' />
            <span>{user.displayName}</span>
          </div>
        ))}
    </div>
  )
}
