import ChatForm from './ChatForm'
import { useAuthContext } from '../hooks/useAuthContext'

export default function Content() {
  const { user } = useAuthContext()
  return (
    <div className='flex flex-col justify-end p-4 flow-lg'>
      <div className='content-messages flex flex-col flow-sm'>
        <div className='mess grid bg-white rounded-full grid-flow-col justify-start shadow'>
          <img
            src='https://placehold.co/52'
            className='row-span-2 rounded-full mr-2'
          />
          <p className='text-lg font-medium text-indigo-500'>Ground Control</p>
          <p className='content '>This is Ground Control to Major Tom</p>
        </div>

        <div className='mess grid bg-white rounded-full grid-flow-col justify-start shadow'>
          <img
            src='https://placehold.co/52'
            className='row-span-2 rounded-full mr-2'
          />
          <p className='text-lg font-medium text-indigo-500'>Major Tom</p>
          <p className='content '>This is Major Tom to Ground Control</p>
        </div>
      </div>
      <ChatForm uid={user.uid} />
    </div>
  )
}
