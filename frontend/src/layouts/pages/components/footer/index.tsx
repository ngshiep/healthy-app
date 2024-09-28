import { Link } from 'react-router-dom'
import customClassNames from 'src/utils/classNames'

const footerTitles = [
  '会員登録',
  '運営会社',
  '利用規約',
  '個人情報の取扱について',
  '特定商取引法に基づく表記',
  'お問い合わせ'
]

export default function Footer() {
  return (
    <footer
      className={customClassNames(
        ' w-screen h-[128px]  flex items-center justify-center bg-bg_primary border border-border flex-shrink-0 '
      )}
    >
      <div className='flex gap-[45px] max-w-[960px] w-full'>
        {footerTitles.map((f) => (
          <Link to={'#'} key={f} className='text-white text-[11px] tracking-[0.03px]'>
            {f}
          </Link>
        ))}
      </div>
    </footer>
  )
}
