import Sidebar from '../components/Sidebar'
import Content from '../components/Content'
import Users from '../components/Users'

export default function Home() {
  return (
    <div className='app h-screen grid grid-cols-[17rem_1fr_17rem]'>
      <Sidebar />
      <Content />
      <Users />
    </div>
  )
}
