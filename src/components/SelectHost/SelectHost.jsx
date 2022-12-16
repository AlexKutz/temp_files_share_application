import s from './SelectHost.module.css'
import { useState } from 'react'
import Select from 'react-select'
import { isDisabled } from '@testing-library/user-event/dist/utils'
import { hosts } from '../../hosts'

function SelectHost (props) {
  const handleChange = (e) => {
    props.setHost(e)
  }
  return (
    <div className={s.container}>
      <Select
        name={'host'}
        defaultValue={{ name: 'Select Host', isDisabled: true }}
        options={[
          { name: 'any', id: -1 },
          ...hosts
        ]}
        value={props.host}
        getOptionLabel ={(option) => option.name}
        getOptionValue ={(option) => option}
        onChange={handleChange}
        className={s.select}
        classNamePrefix={'select'}
        theme={(theme) => ({
          ...theme,
          borderRadius: '2px',
          colors: {
            ...theme.colors,
            primary25: 'lightgrey',
            primary: '#758080',
            neutral0: '#eaeaea', // background
            neutral20: '#959595', // border
            neutral10: '#fff'
          }
        })}
      />
    </div>
  )
}

export default SelectHost
