import { useState } from 'react'
import supabase from '../SupabaseClient'
import '../css/Login.css'

import { useNavigate } from 'react-router-dom'



export function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
        if (error) alert('Login error: ' + error.message)
        else {
            navigate('/admin-dashboard');
          }
  }

  return (
    <>
        <h1>Grange Admin Login</h1>
        <form onSubmit={handleLogin}>
            <div className="login-fields">
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="submit">Login</button> 
        </form>
    </>
  )
}