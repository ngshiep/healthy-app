import { useRef } from 'react'
import { Outlet } from 'react-router'
import Footer from '../components/footer'
import Header from '../components/header-private'

export default function LayoutPublic() {
  const containerRef = useRef<HTMLDivElement>(null)
  const handleScrollTop = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }
  return (
    <div className='w-screen h-screen flex  flex-col !text-sm'>
      <div className='flex overflow-x-hidden h-screen container-[960px]'>
        <Header />
        <div className='flex-1 flex flex-col text-text_secondary w-full bg-white items-center justify-center'>
          <div
            className='max-w-[960px] w-full  h-full overflow-auto overflow-x-hidden mt-[64px] mb-[128px] relative'
            ref={containerRef}
          >
            <Outlet></Outlet>
          </div>
          <div className='absolute right-4 bottom-[200px] size-[48px] aaa'>
            <button onClick={handleScrollTop}>
              <svg width='48' height='48' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M24 0.5C36.9787 0.5 47.5 11.0213 47.5 24C47.5 36.9787 36.9787 47.5 24 47.5C11.0213 47.5 0.5 36.9787 0.5 24C0.5 11.0213 11.0213 0.5 24 0.5Z'
                  fill='white'
                  fillOpacity='0.01'
                  stroke='#777777'
                />
                <path
                  d='M30.5853 28.042L24.0003 21.6579L17.4153 28.042L16.5391 27.1925L24.0003 19.959L31.4615 27.1925L30.5853 28.042Z'
                  fill='#777777'
                />
              </svg>
            </button>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </div>
  )
}
