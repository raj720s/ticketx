import Link from 'next/link'

import React from 'react'
async function getTickets() {
  // await new Promise((res, rej) => setTimeout(() => res(true), 3000))
  const res = await fetch('http://localhost:4000/tickets', {next: {revalidate: 0}})
  // const res = await fetch('../../data/db.json')
  return res.json()
}
async function StockList() {
  const stocks = await getTickets()
  return (
    <>
      <>
        {stocks.map((ticket) => (
          <Link href={`/stocks/${ticket.id}`}>
            <div key={ticket.id} className='card my-5'>
              <h3>{ticket.title}</h3>
              <p>{ticket.body.slice(0, 200)}...</p>
              <div className={`pill ${ticket.priority}`}>{ticket.priority} priority</div>
            </div>
          </Link>
        ))}

        {stocks.length === 0 && <p className='text-center'>There are no open tickets, yay!</p>}
      </>
    </>
  )
}

export default StockList
