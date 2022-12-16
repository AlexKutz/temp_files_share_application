import s from './FilterPanel.module.css'

const sortOptions = [
  { title: 'Name', value: 'name' },
  { title: 'Status', value: 'status' },
  { title: 'Type', value: 'type' },
  { title: 'Size', value: 'size' }
]

function FilterPanel (props) {
  return (
    <div className={s.container}>
      {
        sortOptions.map(option => {
          return <div className={s.option}>{option.title}</div>
        })
      }
    </div>
  )
}

export default FilterPanel
