import { Checkbox } from '@mui/material'
import { Formik, FormikHelpers } from 'formik'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ButtonPrimary } from 'src/components/ButtonComponent'
import FormikError from 'src/components/FomikComponents/FormikError'
import InputComponent from 'src/components/InputComponent'
import InputPasswordComponent from 'src/components/InputPasswordComponent'
import app from 'src/config/app'
import { urls } from 'src/config/urls'
import { useUserContext } from 'src/contexts/UserProvide'
import { UserService } from 'src/services/user.service'
import { setUnprocessableEntityErrorToForm } from 'src/utils/utilsError'
import * as Yup from 'yup'
import { loginService } from './services/login.service'

const loginSchema = Yup.object().shape({
  email: Yup.string().email('メールアドレスの入力').required('メールアドレスの入力'),
  password: Yup.string().required('パスワードの入力')
})

interface IUserLogin {
  email: string
  password: string
}

export default function LoginPage() {
  const initialValues = { email: '', password: '' }
  const [isRememberMe, setIsRememberMe] = useState(true)
  const navigate = useNavigate()
  const { setUser } = useUserContext()
  const [error, setError] = useState<boolean>(false)
  console.log('baseUrl ::: ', app.baseUrl)

  //const handleLogin = async (values: IUserLogin, { setErrors }) => {
  const handleLogin = async (values: IUserLogin, { setErrors }: FormikHelpers<IUserLogin>) => {
    isRememberMe ? UserService.setRememberMe('1') : UserService.setRememberMe('0')

    try {
      const resLogin = await loginService.login(values.email, values.password)
      if (resLogin.status === 200) {
        const resUser = await loginService.getUserInfo()

        if (isRememberMe) {
          UserService.setUser(resUser.data.data)
        }
        // get user info and set data in context and localStorage
        if (resUser.data) {
          setUser({ ...resUser.data.data, token: resLogin.data.refreshToken })
          navigate(urls.web.project.manager)
        }
      } else {
        setError(true)
      }
    } catch (error: any) {
      console.log(error.response.data.data)

      if (error.response.status === 422) {
        setUnprocessableEntityErrorToForm(error, setErrors)
      } else {
        setError(true)
      }
    }
  }
  return (
    <div className='h-screen w-screen flex justify-center items-center bg-white '>
      <div className='p-5 py-10 rounded-lg bg-white flex flex-col shadow-sm shadow-orange-50 border'>
        <div className='w-full flex items-center justify-center gap-2 mb-10 pr-3 '>
          <h1 className='text-[36px] font-medium'>ログイン</h1>
        </div>
        <Formik initialValues={initialValues} validationSchema={loginSchema} onSubmit={handleLogin}>
          {({ values, handleChange, errors, handleSubmit }) => (
            <div className='space-y-[10px] flex flex-col'>
              <div className='flex flex-col gap-[2px] items-start justify-start'>
                <label htmlFor='email' className='text-sm font-medium text-text_primary'>
                  メール
                </label>
                <InputComponent
                  autoFocus={true}
                  fullWidth
                  type='email'
                  name='email'
                  id='email'
                  className='text-[#000000] rounded-lg block p-2.5 w-[310px] text-sm px-2 py-[10px] outline-none border-none'
                  placeholder='email@ttdesignco.com'
                  value={values.email}
                  onChange={handleChange}
                ></InputComponent>
                <FormikError error={errors.email}></FormikError>
              </div>

              <div className='flex flex-col gap-[2px] items-start justify-start'>
                <label htmlFor='password' className='text-sm font-medium text-text_primary'>
                  パスワード
                </label>
                <InputPasswordComponent
                  name='password'
                  id='password'
                  className='bg-[#DCDCDC] text-[#000000] rounded-lg block p-2.5 w-[310px] text-sm px-2 py-[10px] outline-none border-none'
                  value={values.password}
                  fullWidth={true}
                  onChange={handleChange}
                ></InputPasswordComponent>
                <FormikError error={errors.password}></FormikError>
              </div>

              <div className='flex flex-row items-center justify-between '>
                <div className='flex items-center justify-center mb-3'>
                  <Checkbox
                    checked={isRememberMe}
                    onChange={(event) => setIsRememberMe(event.target.checked)}
                    id='rememberMe'
                    sx={{
                      padding: '0px',
                      cursor: 'pointer'
                    }}
                  />
                  <label htmlFor='rememberMe' className='text-[#1E1E1E] text-sm select-none pl-1'>
                    ログイン状態を保持する
                  </label>
                </div>
              </div>
              {error && (
                <div className='flex flex-col  w-[320px] text-sm text-red-800 font-semibold'>
                  <span>
                    入力されたログインメールアドレスまたはパスワード正しくありません。再度、入力を行ってください。
                  </span>
                </div>
              )}
              <ButtonPrimary onClick={() => handleSubmit()}>
                <span className='!font-medium text-sm '>ログイン</span>
              </ButtonPrimary>

              <span className='text-center text-sm pt-5 inline-block'>
                登録がお済みでない方は管理者にご連絡ください。
              </span>
            </div>
          )}
        </Formik>
      </div>
    </div>
  )
}
