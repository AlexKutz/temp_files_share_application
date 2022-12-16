import axios from 'axios'

export function upload (files, host) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  }

  const data = new FormData()
  data.append('file', files[0])

  axios.post(host.getUploadUrl(), data, options)
    .then(response => console.log(response))
    .catch(error => console.log(error))
}
