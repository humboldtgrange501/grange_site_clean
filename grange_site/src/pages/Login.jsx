import { useState } from 'react'
import supabase from '../SupabaseClient'
import '../css/Login.css'
import { useNavigate } from 'react-router-dom'

export function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    if (error) alert('Login error: ' + error.message)
    else navigate('/admin-dashboard')
  }

  return (
    <div className="login-page">
      <h1>Grange Admin Login</h1>
      <h4 style={{ marginTop: '0' }}>
        <em>For Humboldt Grange #501 Admins only.</em>
      </h4>
      <form onSubmit={handleLogin}>
        <div className="login-fields">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="password-wrapper">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
              aria-label="Toggle password visibility"
            >
              <span className="material-symbols-outlined">
                {showPassword ? 'visibility' : 'visibility_off'}
              </span>
            </button>
          </div>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}
