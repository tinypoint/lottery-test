import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState(0)

  const getUser = async () => {
    const user = await fetch('/api/hello')
      .then(response => response.json());
    setUser(user)
  }

  const lottery = async () => {
    if (loading) {
      return;
    }
    setLoading(true)
    try {
      const lotteryRes = await fetch('/api/lottery')
        .then(response => response.json());
      console.log(lotteryRes)
      if (lottery.status === 0) {
        alert('恭喜您中奖')
      } else {
        alert('您未中奖')
      }
    } catch (e) {

    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getUser()
  }, [])

  return (
    <>
      <h2>您好, {user ? user.name : ''}</h2>
      <div className="card">
        <button onClick={() => lottery()}>
          抽奖
        </button>
      </div>
    </>
  )
}

export default App
