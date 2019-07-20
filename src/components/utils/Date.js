export default date => {
  date = date.split('/')
  date = `${date[2]}-${date[1]}-${date[0]}`
  return date
}