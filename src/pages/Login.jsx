import { useState } from 'react'
import { useLogin } from '../hooks/useLogin'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { error, isPending, login } = useLogin()

  const handleSubmit = e => {
    e.preventDefault()
    login(email, password)
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

      {!isPending && (
        <button type='submit' className='bg-indigo-500 btn'>
          Log in
        </button>
      )}
      {isPending && (
        <button className='btn bg-neutral-300' disabled>
          Loading...
        </button>
      )}
      {error && (
        <p className='bg-red-100 text-red-900 p-2 rounded-lg'>{error}</p>
      )}
    </form>
  )
}
