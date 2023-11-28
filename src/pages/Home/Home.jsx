import { useParams } from 'react-router-dom'
import MessagesForm from './MessagesForm'
import MessagesList from './MessagesList'
import { useAuthContext } from '../../hooks/useAuthContext'
import { useCollection } from '../../hooks/useCollection'

export default function ChatRoom() {
  const { id } = useParams()
  console.log(id)
  const { user } = useAuthContext()
  const { documents, error } = useCollection(
    'messages',
    [id, '==', 'chatRoom'] /* FIX*/,
    ['createdAt', 'desc']
  )

  return (
    <div className='flex flex-col flex-1 justify-end p-4 flow-lg'>
      {error && <p>{error}</p>}
      {documents && <MessagesList messages={documents} />}
      <MessagesForm uid={user} />
    </div>
  )
}
