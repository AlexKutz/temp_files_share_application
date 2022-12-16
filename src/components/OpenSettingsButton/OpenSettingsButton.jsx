import s from './OpenSettingsButton.module.css'
import { ReactComponent as Icon } from './gear.svg'

function OpenSettingsButton (props) {
  return (
    <button className={s.button}>
      <Icon stroke={'white'} />
    </button>
  )
}

export default OpenSettingsButton
