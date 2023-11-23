import { useState } from 'react'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    console.log(email, password)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='w-[min(100%,24rem)] bg-white rounded-xl shadow-lg p-4 m-auto flow-lg'>
      <label className='block'>
        <span>Email:</span>
        <input
          type='email'
          className='w-full border border-neutral-400 rounded-lg p-2'
          onChange={e => setEmail(e.target.value)}
          value={email}
        />
      </label>
      <label className='block'>
        <span>Password:</span>
        <input
          type='password'
          className='w-full border border-neutral-400 rounded-lg p-2'
          onChange={e => setPassword(e.target.value)}
          value={password}
        />
      </label>
      <button type='submit' className='bg-indigo-500 px-4 py-2 rounded-xl'>
        Log in
      </button>
    </form>
  )
}
