import { IconButton, InputAdornment, OutlinedInput, StandardTextFieldProps } from '@mui/material'
import React from 'react'
import IconVisibility from 'src/assets/icons/icon-visibility'
import IconVisibilityOff from 'src/assets/icons/icon-visibility-off'

export default function InputPasswordComponent({
  id,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onChange = () => {},
  value,
  fullWidth = false
}: StandardTextFieldProps) {
  const [showPassword, setShowPassword] = React.useState(false)

  const handleClickShowPassword = () => setShowPassword((show) => !show)

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }
  return (
    <OutlinedInput
      id={id}
      fullWidth={fullWidth}
      type={showPassword ? 'text' : 'password'}
      inputProps={{
        style: {
          fontSize: '14px'
        }
      }}
      onChange={onChange}
      autoComplete='off'
      value={value}
      placeholder='パスワード'
      sx={{ '& .MuiInputBase-input': { paddingX: '10px', paddingY: '10px', backgroundColor: 'white' } }}
      endAdornment={
        <InputAdornment position='end' sx={{ marginRight: '2px' }}>
          <IconButton
            aria-label='toggle password visibility'
            onClick={handleClickShowPassword}
            onMouseDown={handleMouseDownPassword}
            edge='end'
          >
            {showPassword ? <IconVisibilityOff /> : <IconVisibility />}
          </IconButton>
        </InputAdornment>
      }
    />
  )
}
