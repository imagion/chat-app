import { ChatBubbleLeftEllipsisIcon } from '@heroicons/react/24/outline'

export default function Sidebar() {
  return (
    <div className='grid content-start p-4 bg-neutral-200 flow-lg'>
      <div className='logo'>
        <ChatBubbleLeftEllipsisIcon className='h-16 w-16 text-indigo-500' />
      </div>
      <h2 className='text-xl'>Channels</h2>
      <div className='flex flex-col items-start pl-4 text-neutral-600'>
        <button className='p-2'>#Games</button>
        <button className='p-2'>#Sport</button>
        <button className='p-2'>#Hobby</button>
      </div>
    </div>
  )
}
