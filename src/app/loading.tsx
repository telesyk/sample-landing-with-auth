import { Skeleton } from '@nextui-org/react'

export default function Loading() {
  return (
    <div className="w-screen h-full space-y-5 p-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col gap-10 sm:gap-20 md:gap-28 my-16 justify-center">
          <div className="flex gap-8 sm:gap-12">
            <Skeleton className="rounded-lg flex-1">
              <div className="h-24 sm:h-64 rounded-lg bg-default-300"></div>
            </Skeleton>
            <div className="space-y-3 sm:space-y-5 flex-1">
              <Skeleton className="w-3/5 rounded-lg">
                <div className="h-6 sm:h-12 w-3/5 rounded-lg bg-default-200"></div>
              </Skeleton>
              <Skeleton className="w-4/5 rounded-lg">
                <div className="h-6 sm:h-12 w-4/5 rounded-lg bg-default-200"></div>
              </Skeleton>
              <Skeleton className="w-2/5 rounded-lg">
                <div className="h-6 sm:h-12 w-2/5 rounded-lg bg-default-300"></div>
              </Skeleton>
              <div className="hidden sm:flex gap-8">
                <Skeleton className="hidden sm:inline-block w-2/5 rounded-lg">
                  <div className="h-24 w-2/5 rounded-lg bg-default-300"></div>
                </Skeleton>
                <Skeleton className="hidden sm:inline-block w-2/5 rounded-lg">
                  <div className="h-24 w-2/5 rounded-lg bg-default-300"></div>
                </Skeleton>
              </div>
            </div>
          </div>
          <div className="flex gap-8 sm:gap-12">
            <div className="space-y-3 sm:space-y-5 flex-1">
              <Skeleton className="w-3/5 rounded-lg">
                <div className="h-6 sm:h-12 w-3/5 rounded-lg bg-default-200"></div>
              </Skeleton>
              <Skeleton className="w-4/5 rounded-lg">
                <div className="h-6 sm:h-12 w-4/5 rounded-lg bg-default-200"></div>
              </Skeleton>
              <Skeleton className="w-2/5 rounded-lg">
                <div className="h-6 sm:h-12 w-2/5 rounded-lg bg-default-300"></div>
              </Skeleton>
              <div className="hidden sm:flex gap-8">
                <Skeleton className="hidden sm:inline-block w-2/5 rounded-lg">
                  <div className="h-24 w-2/5 rounded-lg bg-default-300"></div>
                </Skeleton>
                <Skeleton className="hidden sm:inline-block w-2/5 rounded-lg">
                  <div className="h-24 w-2/5 rounded-lg bg-default-300"></div>
                </Skeleton>
              </div>
            </div>
            <Skeleton className="rounded-lg flex-1">
              <div className="h-24 sm:h-64 rounded-lg bg-default-300"></div>
            </Skeleton>
          </div>
        </div>
      </div>
    </div>
  )
}
