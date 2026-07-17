export const formatCurrency = (value) => `$${Number(value || 0).toFixed(2)}`

export const truncateText = (text, maxLength = 40) => {
  if (!text) return ''
  return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text
}
