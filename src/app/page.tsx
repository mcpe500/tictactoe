import dynamic from 'next/dynamic'
import Image from 'next/image'
import Dashboard from './dashboard/page'

// const Dashboard = dynamic(() => import("./pages/dashboard/page"), { ssr: false })

export default function Home() {
  return (
    <>
      <Dashboard />
    </>
  )
}
