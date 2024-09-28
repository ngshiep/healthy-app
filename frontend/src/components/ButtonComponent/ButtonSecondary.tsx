import { Button, ButtonProps } from '@mui/material'

export default function ButtonSecondary({ children, sx, ...prop }: ButtonProps) {
  return (
    <Button
      variant='outlined'
      sx={{ minWidth: '96px', height: '36px', textTransform: 'none', borderRadius: 0, cursor: 'pointer', ...sx }}
      {...prop}
    >
      {children}
    </Button>
  )
}
