import { PaperAirplaneIcon } from '@heroicons/react/24/outline'

export default function Content() {
  return (
    <div className='flex flex-col justify-end p-4 bg-neutral-100 flow-lg'>
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
      <form className='flex gap-2'>
        <input type='text' className='w-full p-2 rounded-xl shadow' />
        <button type='submit' className='bg-indigo-500 p-2 rounded-xl '>
          <PaperAirplaneIcon className='text-black w-7 h-w-7' />
        </button>
      </form>
    </div>
  )
}
