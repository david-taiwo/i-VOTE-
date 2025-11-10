'use client'

import { useState } from 'react'
import { signIn } from '@/lib/auth'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const router = useRouter()
  const [voterId, setVoterId] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = () => {
    try {
      setError(null)
      signIn({ voterId: voterId.trim(), password })
      if (!remember) {
        sessionStorage.setItem('ivote_tmp', '1')
      }
      router.push('/dashboard')
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Unable to sign in'
      setError(message)
    }
  }

  return (
    <>
      <h1 className="text-2xl font-extrabold text-slate-900 md:text-3xl">Welcome Back!</h1>
      <p className="mt-1 text-slate-600">Please log in to vote in your preferred candidate.</p>

      <div className="mt-6 space-y-4">
        <div>
          <label className="block text-sm font-semibold text-slate-700">Voters ID No.</label>
          <input
            value={voterId}
            onChange={(event) => setVoterId(event.target.value)}
            placeholder="Voters ID No."
            className="mt-1 w-full rounded-full border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700">Password</label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Password"
              className="mt-1 w-full rounded-full border border-slate-300 px-4 py-3 pr-12 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type="button"
              onClick={() => setShowPassword((state) => !state)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500"
            >
              👁
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 text-slate-600">
            <input
              type="checkbox"
              checked={remember}
              onChange={(event) => setRemember(event.target.checked)}
            />
            Remember Password
          </label>
          <a className="font-semibold text-indigo-600" href="#">
            Forgot Password?
          </a>
        </div>

        {error && <p className="text-sm text-rose-600">{error}</p>}

        <button
          onClick={handleSubmit}
          className="w-full rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 px-6 py-3 font-semibold text-white shadow-md"
        >
          LOGIN
        </button>

        <p className="text-center text-sm text-slate-600">
          Sign in as an Admin{' '}
          <a href="#" className="font-semibold text-indigo-600">
            here
          </a>
          <br />
          Don’t have an account?{' '}
          <a href="/register" className="font-semibold text-indigo-600">
            Register here
          </a>
        </p>
      </div>
    </>
  )
}