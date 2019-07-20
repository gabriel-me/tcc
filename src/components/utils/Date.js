export default date => {
  if (date) {
    date = date.split('/')
    date = `${date[2]}-${date[1]}-${date[0]}`
    return date
  }
  return ''
}

export const brazilFormat = date => {
  if (date) {
    date = new Date(date)
    let day = date.getDate() + 1
    let month = date.getMonth() + 1
    day = day.toString().padStart('2', '0')
    month = month.toString().padStart('2', '0')
    return `${day}/${month}`
  }
  return ''
}