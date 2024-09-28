interface IProps {
  error: string | undefined
}
export default function FormikError(props: IProps) {
  const { error } = props
  return (
    <div className='h-[18px] w-full'>
      {error && <span className='text-xs text-red-400 font-semibold line-clamp-1 pl-[10px] mt-1'>{error}</span>}
    </div>
  )
}
