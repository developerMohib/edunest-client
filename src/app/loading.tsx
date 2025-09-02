export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <div className='h-screen flex items-center justify-center'>
      <div className="relative w-10 h-10 ">
        <div className="absolute w-full h-full rounded-full border-2 border-orange-600 animate-ping opacity-75" />
        <div className="relative rounded-full h-full w-full border-2 border-orange-600" />
      </div>
    </div>
  )
}