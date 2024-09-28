import Dialog from '@mui/material/Dialog'
import { ReactNode } from 'react'

interface DialogConfirmType {
  open: boolean
  handleClose: () => void
  title: string
  children: ReactNode
  width?: number
}

export default function FormDialogComponent({ open, handleClose, title, children, width = 500 }: DialogConfirmType) {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      sx={{
        zIndex: 10001,
        '& .MuiDialog-paper': {
          maxWidth: `${width}px`
        }
      }}
      fullWidth
    >
      <div className='rounded-lg bg-white shadow-md shadow-gray-400 p-4' style={{ maxWidth: `${width}px` }}>
        {/* title */}
        <div className='items-center w-full mb-4'>
          <h3 className='text-2xl font-semibold text-center'>{title}</h3>
        </div>

        {/* content */}
        <div className='w-full flex  flex-col justify-center items-center'>{children}</div>
        {/* action */}
      </div>
    </Dialog>
  )
}
