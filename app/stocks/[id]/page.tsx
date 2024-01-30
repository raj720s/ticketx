import {PageNotFoundError} from 'next/dist/shared/lib/utils'
import {notFound} from 'next/navigation'
import React from 'react'

type obj = {}

export async function generateStaticParams() {
  const res = await fetch('http://localhost:4000/tickets/')
  const tkts = await res.json()
  return tkts.map((tkt: any) => ({id: tkt.id}))
}

async function getTicket(id: number) {
  const res = await fetch('http://localhost:4000/tickets/' + id, {next: {revalidate: 30}})

  if (!res.ok) {
    notFound()
  }

  return res.json()
}
interface params {
  id: number
}
async function Stocks({params}: {params: params}) {
  const ticket = await getTicket(params.id)

  return (
    <main>
      <nav>
        <h2>Ticket Details</h2>
      </nav>
      <div className='card'>
        <h3>{ticket.title}</h3>
        <small>Created by {ticket.user_email}</small>
        <p>{ticket.body}</p>
        <div className={`pill ${ticket.priority}`}>{ticket.priority} priority</div>
      </div>
    </main>
  )
}

export default Stocks
