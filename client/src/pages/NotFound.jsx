import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm">
        <h2 className="text-3xl font-semibold text-slate-800">Page not found</h2>
        <p className="mt-3 text-sm text-slate-500">The page you are looking for does not exist.</p>
        <Link className="mt-6 inline-flex rounded-lg bg-indigo-600 px-4 py-2 text-white" to="/dashboard">
          Go home
        </Link>
      </div>
    </div>
  )
}

export default NotFound
