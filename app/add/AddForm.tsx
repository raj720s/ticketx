'use client'
import {useRouter} from 'next/navigation'
import React, {useState} from 'react'

export default function AddForm() {
  const router = useRouter()
  const [title, setTitle] = useState('')
  const [body, setbody] = useState('')
  const [prio, setprio] = useState('low')
  const [loading, setloading] = useState(false)
  const email = 'rajkd@ninja.com'

  const onSubmit = async (e: any) => {
    e.preventDefault()
    setloading(true)
    const tkt = {
      title,
      body,
      priority: prio,
      user_email: email,
    }
    const add = await fetch('http://localhost:4000/tickets', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(tkt),
    })

    if (add.status === 201) {
      router.refresh()
      router.push('/stocks')
    }
  }
  return (
    <form className='w-1/2' onSubmit={onSubmit}>
      <label>
        <input type='text' value={email} disabled />
        <span>title</span>
        <input type='text' required value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <label>
        <span>body</span>
        <textarea required value={body} onChange={(e) => setbody(e.target.value)} />
      </label>
      <label>
        <span>prio</span>
        <select defaultValue={''} onChange={(e) => setprio(e.target.value)}>
          <option value='' disabled>
            select priority
          </option>
          <option value='low'>low</option>
          <option value='medium'>medium</option>
          <option value='high'>high</option>
        </select>
      </label>
      <button className='btn-primary' disabled={loading}>
        {(loading && <span>addming..</span>) || 'add'}{' '}
      </button>
    </form>
  )
}
