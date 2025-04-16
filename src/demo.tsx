import { Link } from 'react-router-dom'

export function Home() {
  return (
    <div>
      <Link to="sub1">
        子应用1
      </Link>
      <Link to="sub2">
        子应用2
      </Link>
    </div>
  )
}

export function Sub1() {
  return (
    <div id="sub1">
    </div>
  )
}

export function Sub2() {
  return (
    <div id="sub2">
    </div>
  )
}