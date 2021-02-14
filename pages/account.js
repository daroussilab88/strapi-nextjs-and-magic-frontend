import Head from 'next/head'
import { useContext } from 'react'
import Link from 'next/link'
import AuthContext from '../context/AuthContext'

export default function Account() {

  const { user, logoutUser } = useContext(AuthContext)

  if (!user) {
    return (
      <div>
        <p>Please, login or register</p>
        <Link href="/"><a>Go Back</a></Link>
      </div>
    )
  }

  return (
    <div>
      <Head>
        <title>Account | E-Shop</title>
        <meta name="description" content="The account page, view your order" />
      </Head>

      <h2>Account</h2>
      <p>Your logged as: {user.email}</p>
      <a href="#" onClick={logoutUser}>Logout</a>
    </div>
  )
}