export const hosts = [
  {
    id: 0,
    name: 'anonfiles',
    url: 'https://anonfiles.com/',
    getUploadUrl () {
      return 'https://api.anonfiles.com/upload'
    },
    getInfoUrl (id) {
      return `https://api.anonfiles.com/v2/file/${id}/info`
    },
    maxSize: 21474836480
  },
  {
    id: 1,
    name: 'letsupload',
    url: 'https://letsupload.cc/',
    getUploadUrl () {
      return 'https://api.letsupload.cc/upload'
    },
    getInfoUrl (id) {
      return `https://api.letsupload.cc/v2/file/${id}/info`
    },
    maxSize: 21474836480
  },
  {
    id: 2,
    name: 'filechan',
    url: 'https://filechan.org',
    getUploadUrl () {
      return 'https://api.filechan.org/upload'
    },
    getInfoUrl (id) {
      return `https://api.filechan.org/v2/file/${id}/info`
    },
    maxSize: 21474836480
  },
  {
    id: 3,
    name: 'bayfiles',
    url: 'https://bayfiles.com',
    getUploadUrl () {
      return 'https://api.bayfiles.com/upload'
    },
    getInfoUrl (id) {
      return `https://api.bayfiles.com/v2/file/${id}/info`
    },
    maxSize: 21474836480
  },
  {
    id: 4,
    name: 'https://openload.cc',
    url: 'https://bayfiles.com',
    getUploadUrl () {
      return 'https://api.openload.cc/upload'
    },
    getInfoUrl (id) {
      return `https://api.openload.cc/v2/file/${id}/info`
    },
    maxSize: 21474836480
  },
  {
    id: 5,
    name: 'lolabits',
    url: 'https://lolabits.se',
    getUploadUrl () {
      return 'https://api.lolabits.se/upload'
    },
    getInfoUrl (id) {
      return `https://api.lolabits.se/v2/file/${id}/info`
    },
    maxSize: 21474836480
  }
]
