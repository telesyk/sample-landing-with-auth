import { HeadingType } from '@/types'

type HeadingProps = {
  variation?: HeadingType
  children: React.ReactNode
  className?: string | null | undefined
  subheading?: string | null | undefined
}

export default function Heading({
  variation = 'lg',
  children,
  className = '',
  subheading,
}: HeadingProps) {
  const baseClass = 'text-foreground'

  const subheader = (classes: string) => (
    <h4 className={`mt-6 ${classes}`}>{subheading}</h4>
  )
  const headerXL = (content: React.ReactNode, classes: string) => (
    <h1 className={`${baseClass} ${classes} ${className}`}>{content}</h1>
  )
  const headerLG = (content: React.ReactNode, classes: string) => (
    <h2 className={`${baseClass} ${classes} ${className}`}>{content}</h2>
  )
  const headerMD = (content: React.ReactNode, classes: string) => (
    <h3 className={`${baseClass} ${classes} ${className}`}>{content}</h3>
  )

  const header = () =>
    variation === 'xl' ? (
      <>
        {headerXL(children, 'text-5xl lg:text-[55px] font-black leading-tight')}
        {subheading &&
          subheader('text-base text-foreground font-bold leading-snug')}
      </>
    ) : variation === 'lg' ? (
      <>
        {headerLG(children, 'text-4xl lg:text-[46px] font-medium leading-snug')}
        {subheading &&
          subheader(
            'text-large leading-normal text-foreground-600 dark:text-foreground-300'
          )}
      </>
    ) : (
      <>
        {headerMD(children, 'text-2xl lg:text-3xl font-bold leading-tight')}
        {subheading &&
          subheader(
            'mt-3 text-foreground-600 text-tiny font-bold leading-normal'
          )}
      </>
    )

  return header()
}
