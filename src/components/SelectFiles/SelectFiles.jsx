import s from './SelectFiles.module.css'
import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'

function SelectFiles (props) {
  return (
    <div className={s.container}>
      <Dropzone setFiles={props.setFiles} />
    </div>
  )
}

function Dropzone (props) {
  const onDrop = useCallback(acceptedFiles => {
    props.setFiles(prevFiles => [...prevFiles, ...acceptedFiles])
  }, [])
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  return (
    <div className={s.dropzone} {...getRootProps()}>
      <input {...getInputProps()}/>
      {
        isDragActive
          ? <p>Drop the files here</p>
          : <p>Drag 'n' drop some files here, or click to select files</p>
      }
    </div>
  )
}

export default SelectFiles
