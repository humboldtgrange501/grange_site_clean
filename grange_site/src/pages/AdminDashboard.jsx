import { useEffect, useState } from 'react'
import supabase from '../SupabaseClient'
import MemberTable from '../components/MemberTable';


export function AdminDashboard() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => listener.subscription.unsubscribe()
  }, [])

  if (!session) return <div>You must be logged in to view this page.</div>

  return (
    <div>
      <h2>Welcome to the Admin Dashboard!</h2>
      <MemberTable/>

    </div>
  )
}
