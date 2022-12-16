import './App.css'
import SelectHost from './components/SelectHost/SelectHost'
import SelectFiles from './components/SelectFiles/SelectFiles'
import FileList from './components/FileList/FileList'
import OpenSettingsButton from './components/OpenSettingsButton/OpenSettingsButton'
import { useState } from 'react'
import UploadButton from './components/UploadButton/UploadButton'
import { upload } from './api'

function App () {
  const [files, setFiles] = useState([])
  const [host, setHost] = useState(null)
  const uploadFiles = () => upload(files, host)
  return (
    <div className="container">
      <SelectFiles setFiles={setFiles}/>
      <div className="uploadPanel">
        <SelectHost host={host} setHost={setHost}/>
        <UploadButton clickHandler={uploadFiles} />
      </div>
      <FileList files={files} />
      <OpenSettingsButton />
    </div>
  )
}

export default App
