import React, {Suspense} from 'react'
import StockList from './StockList'
import Loading from '../loading'

function Stocks() {
  return (
    <main>
      <nav>
        <div>
          <h2>Tickets</h2>
          <p>
            <small>Currently open stocks.</small>
          </p>
        </div>
      </nav>
      <Suspense fallback={<Loading />}>
        <StockList />
      </Suspense>
    </main>
  )
}

export default Stocks
