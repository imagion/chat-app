import { useState, useEffect } from 'react'
import { useFirestore } from '../../hooks/useFirestore'
import { PaperAirplaneIcon } from '@heroicons/react/24/outline'

export default function ChatForm({ uid }) {
  const [message, setMessage] = useState('')
  const { addDocument, response } = useFirestore('chats')

  const handleSubmit = e => {
    e.preventDefault()
    addDocument({ uid, message })
  }

  useEffect(() => {
    if (response.success) {
      setMessage('')
    }
  }, [response.success])

  return (
    <form className='flex gap-2' onSubmit={handleSubmit}>
      <input
        type='text'
        className='w-full p-2 rounded-xl shadow'
        required
        onChange={e => setMessage(e.target.value)}
        value={message}
      />
      <button type='submit' className='bg-indigo-500 p-2 rounded-xl '>
        <PaperAirplaneIcon className='text-black w-7 h-w-7' />
      </button>
    </form>
  )
}
