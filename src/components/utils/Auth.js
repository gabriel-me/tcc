import axios from 'axios'

export default (idUser, token) => {
  return new Promise((resolve, reject) => {
    const URL = `http://localhost:8082/user/${idUser}`
    axios.get(URL).then(result => {
      const local = window.localStorage
      local.setItem('id', result.data._id || '')
      local.setItem('email', result.data.email || '')
      local.setItem('name', result.data.name || '')
      local.setItem('lastName', result.data.lastName || '')
      local.setItem('about', result.data.about || '')
      local.setItem('profession', result.data.profession || '')
      local.setItem('photo', result.data.photo || '')
      local.setItem('createAt', result.data.createAt || '')
      local.setItem('token', token || '')
      resolve({
        id: local.getItem('id'),
        email: local.getItem('email'),
        name: local.getItem('name'),
        lastName: local.getItem('lastName'),
        createAt: local.getItem('createAt'),
        token: local.getItem('token')
      })
    }).catch(err => {
      reject(err)
    })
  })
}