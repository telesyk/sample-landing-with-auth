import Link from 'next/link'
import { Tilt_Prism, Bebas_Neue } from 'next/font/google'
import { BsFillSignStopFill } from 'react-icons/bs'

const tiltPrism = Tilt_Prism({
  subsets: ['latin'],
  display: 'swap',
})

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
})

export default function NotFound() {
  return (
    <div className="w-screen h-full space-y-5 p-16 md:p-32 text-white">
      <div className="absolute z-0 top-0 left-0 w-full min-h-screen flex justify-center items-center bg-danger-900">
        <BsFillSignStopFill className="w-72 h-72 md:w-96 md:h-96 text-slate-200/25 animate-ping" />
      </div>
      <div className="max-w-xl mx-auto relative z-10">
        <div className="flex flex-col gap-8 md:gap-12">
          <div
            className={`${tiltPrism.className} flex-1 text-center text-5xl md:text-9xl leading-loose`}
          >
            <span>4</span>
            <span>0</span>
            <span>4</span>
          </div>
          <div className="flex-1 text-center text-2xl md:text-4xl leading-loose">
            <div className={bebasNeue.className}>
              <p className="leading-loose">Hey, you!</p>
              <p className="leading-loose">
                <Link href="/" className="underline">
                  Turn around, slowly!
                </Link>
              </p>
              <p className="leading-loose">And never back here again!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
