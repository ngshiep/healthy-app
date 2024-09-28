export default function ButtonToTop() {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  return (
    <div className='fixed right-[96px] bottom-[272px] w-[36px] h-[36px] aaa'>
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
  )
}
