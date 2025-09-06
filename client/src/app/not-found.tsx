import Image from 'next/image'
import Link from 'next/link'

export default function NotFound() {
    return (
        <div className='h-screen flex items-center justify-center'>
            <Image className='w-sm h-auto' src={"/images/not.found.image.png"} alt='Not Found Page' width={500} height={500} />
            <div className='space-y-1.5'>
                <h2>Not Found</h2>
                <p>Could not find requested resource</p>
                <Link className='btn outline rounded-sm p-1' href="/">Return Home</Link>
            </div>
        </div>
    )
}