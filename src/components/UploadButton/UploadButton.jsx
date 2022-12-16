import s from './UploadButton.module.css'

function UploadButton (props) {
  return (
      <button className={s.button} onClick={props.clickHandler}>Upload</button>
  )
}

export default UploadButton
