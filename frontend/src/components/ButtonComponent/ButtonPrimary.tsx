import { Button, ButtonProps } from '@mui/material'

export default function ButtonPrimary({ children, sx, ...prop }: ButtonProps) {
  return (
    <Button
      variant='contained'
      sx={{ minWidth: '96px', height: '36px', borderRadius: 0, textTransform: 'none', cursor: 'pointer', ...sx }}
      {...prop}
    >
      {children}
    </Button>
  )
}
