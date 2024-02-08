import { SectionLoader } from '@/components'

export default function Loading() {
  return (
    <div className="w-screen h-full space-y-5 p-12">
      <SectionLoader />
      <SectionLoader reverse={true} />
    </div>
  )
}
