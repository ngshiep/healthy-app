import { StandardTextFieldProps, TextField } from '@mui/material'

interface InputComponentProps extends StandardTextFieldProps {
  height?: string | number
}

export default function InputComponent({
  id,
  onChange,
  disabled,
  value,
  fullWidth = false,
  height,
  ...props
}: InputComponentProps) {
  return (
    <TextField
      fullWidth={fullWidth}
      color='primary'
      variant='outlined'
      id={id}
      value={value}
      onChange={onChange}
      disabled={disabled}
      sx={{
        '& .MuiInputBase-input': {
          paddingX: '10px',
          paddingY: '6px',
          fontSize: '14px',
          height: height || 'auto'
        }
      }}
      {...props}
    />
  )
}
