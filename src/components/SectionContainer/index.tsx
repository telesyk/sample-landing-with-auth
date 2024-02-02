import { Container } from '..'

type SectionContainerProps = {
  children: React.ReactNode
  classNames?: {
    base?: string
    container?: string
  }
  justify?: 'center' | 'end' | 'start'
}

export default function SectionContainer({
  children,
  classNames = {
    base: '',
    container: '',
  },
  justify = 'center',
}: SectionContainerProps) {
  return (
    <section className={classNames.base}>
      <Container>
        <div
          className={`flex flex-col justify-${justify} ${classNames.container}`}
        >
          {children}
        </div>
      </Container>
    </section>
  )
}
