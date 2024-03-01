import { useState } from 'react'

export default function App() {
  const [likeCount, setLikeCount] = useState(0)
  
  function increaseLike() {
    setLikeCount(likeCount + 1)
  }
  
  return (
    <>
      <button onClick={increaseLike}>❤️ {likeCount}</button>
    </>
  )
}
