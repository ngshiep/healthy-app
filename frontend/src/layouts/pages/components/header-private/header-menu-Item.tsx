import { MenuItem } from '@mui/material'

interface IProps {
  title: string
  onClick?: () => void
  isLast?: boolean
}
export default function HeaderMenuItem(props: IProps) {
  const { title, onClick, isLast } = props
  return (
    <MenuItem
      key={title}
      onClick={() => {
        if (onClick) onClick()
      }}
      sx={{
        backgroundColor: '#777777',
        ':hover': {
          backgroundColor: '#707070',
          fontWeight: '300'
        },
        border: isLast ? 'none' : '1px solid #707070',
        paddingLeft: '32px',
        paddingY: '23px',
        width: '280px'
      }}
    >
      <span className=' text-white'>{title}</span>
    </MenuItem>
  )
}
