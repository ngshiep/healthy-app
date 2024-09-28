import { Outlet } from 'react-router'
import ButtonToTop from 'src/layouts/pages/components/button-to-top'
import Footer from '../components/footer'
import Header from '../components/header'

export default function LayoutPublic() {
  return (
    <div className='w-screen min-h-screen flex  flex-col !text-sm'>
      <div className='flex min-h-screen overflow-x-hidden w-screen'>
        <Header />
        <div className='flex-1 flex flex-col text-text_secondary w-full bg-white items-center'>
          <div className=' w-full  overflow-y-auto overflow-x-hidden mt-[64px] flex flex-col items-center justify-center'>
            <Outlet></Outlet>
            <Footer></Footer>
            <ButtonToTop></ButtonToTop>
          </div>
        </div>
      </div>
    </div>
  )
}
