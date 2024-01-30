import React from 'react'

function About() {
  return (
    <main className='p-4'>
      <h2 className='text-2xl mb-4'>Welcome to mstock!</h2>
      <p>Your finance application.</p>

      <section className='mt-8'>
        <h3 className='text-xl mb-2'>Latest News</h3>
        {/* Replace this part with your actual data */}
        <div className='bg-white p-4 rounded shadow'>
          <h4 className='text-lg'>News Title</h4>
          <p>News content...</p>
        </div>
      </section>
    </main>
  )
}

export default About
