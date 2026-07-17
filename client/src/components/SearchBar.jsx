import { FiSearch } from 'react-icons/fi'

const SearchBar = ({ value, onChange, placeholder = 'Search tasks...' }) => {
  return (
    <label className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
      <FiSearch className="text-slate-400" />
      <input
        className="w-full bg-transparent text-sm outline-none"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
      />
    </label>
  )
}

export default SearchBar
