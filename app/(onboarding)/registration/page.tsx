'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { saveProfile } from '@/lib/auth'

export default function RegistrationPage() {
  const router = useRouter()
  const [form, setForm] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    birthday: '',
    phone: '',
    email: '',
    organization: '',
    province: '',
    barangay: '',
    city: '',
  })

  const updateField = (key: keyof typeof form, value: string) => {
    setForm((state) => ({
      ...state,
      [key]: value,
    }))
  }

  const handleSubmit = () => {
    if (!form.firstName || !form.lastName || !form.email) return

    try {
      saveProfile(form)
      router.push('/dashboard')
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Unable to save profile'
      alert(message)
    }
  }

  return (
    <>
      <h1 className="text-2xl font-extrabold text-slate-900 md:text-3xl">Fill out your information</h1>
      <p className="mt-1 text-slate-600">Please fill out your information below</p>

      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
        <Input
          label="First Name"
          value={form.firstName}
          onChange={(event) => updateField('firstName', event.target.value)}
        />
        <Input
          label="Middle Name"
          value={form.middleName}
          onChange={(event) => updateField('middleName', event.target.value)}
        />
        <Input
          label="Last Name"
          value={form.lastName}
          onChange={(event) => updateField('lastName', event.target.value)}
        />

        <Input
          label="Birthday"
          type="date"
          value={form.birthday}
          onChange={(event) => updateField('birthday', event.target.value)}
        />

        <div>
          <label className="block text-sm font-semibold text-slate-700">Contact Number</label>
          <div className="mt-1 flex">
            <select className="rounded-l-full border border-slate-300 px-3">
              <option>+63</option>
              <option>+234</option>
              <option>+1</option>
            </select>
            <input
              className="w-full rounded-r-full border border-l-0 border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Contact Number"
              value={form.phone}
              onChange={(event) => updateField('phone', event.target.value)}
            />
          </div>
        </div>

        <Input
          label="Email"
          type="email"
          value={form.email}
          onChange={(event) => updateField('email', event.target.value)}
        />
        <Input
          label="Organization"
          value={form.organization}
          onChange={(event) => updateField('organization', event.target.value)}
        />

        <Input
          label="Province"
          value={form.province}
          onChange={(event) => updateField('province', event.target.value)}
        />
        <Input
          label="Barangay"
          value={form.barangay}
          onChange={(event) => updateField('barangay', event.target.value)}
        />
        <Input
          label="City/Municipality"
          value={form.city}
          onChange={(event) => updateField('city', event.target.value)}
        />
      </div>

      <button
        onClick={handleSubmit}
        className="mt-6 w-full rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 px-6 py-3 font-semibold text-white shadow-md"
      >
        SUBMIT
      </button>
    </>
  )
}

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string
}

function Input({ label, type = 'text', ...rest }: InputProps) {
  return (
    <div>
      <label className="block text-sm font-semibold text-slate-700">{label}</label>
      <input
        type={type}
        className="mt-1 w-full rounded-full border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        {...rest}
      />
    </div>
  )
}