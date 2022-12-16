import s from './FileList.module.css'
import { bytesToHumanReadable } from '../../helpers'
import FilterPanel from './FilterPanel/FilterPanel'

function FileList (props) {
  return (
    <div className={s.container}>
      <FilterPanel />
      {
        props.files.map(file => <FileItem file={file}/>)
      }
    </div>
  )
}

function FileItem ({ file }) {
  console.log(file)
  const filename = file.name.length > 100
    ? file.name.slice(0, 100).concat('...')
    : file.name
  return (
    <div className={s.item}>
      <span className={s.name}>{filename}</span>
      <span className={s.status}>Pending</span>
      <span className={s.type}>{file.type}</span>
      <span className={s.size}>{bytesToHumanReadable(file.size)}</span>
    </div>
  )
}

export default FileList
