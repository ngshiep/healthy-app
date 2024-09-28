import { Menu, PopoverProps, SxProps, Theme } from '@mui/material'

type PopoverComponentType = {
  sx?: SxProps<Theme> | undefined
  handleClose: () => void
  anchorElement: PopoverProps['anchorEl'] | undefined | null
  children: React.ReactNode
  horizontal?: 'left' | 'center' | 'right' | number
}

export default function PopoverComponent({
  sx,
  anchorElement,
  children,
  horizontal = 'right',
  handleClose
}: PopoverComponentType) {
  return (
    <>
      <Menu
        sx={{
          mt: '45px',
          '& .MuiList-root': {
            backgroundColor: '#777777',
            padding: '0px',
            border: 'none'
          },
          ...sx
        }}
        anchorEl={anchorElement}
        anchorOrigin={{
          vertical: 'top',
          horizontal: horizontal
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: horizontal
        }}
        open={Boolean(anchorElement)}
        onClose={handleClose}
      >
        {children}
      </Menu>
    </>
  )
}
