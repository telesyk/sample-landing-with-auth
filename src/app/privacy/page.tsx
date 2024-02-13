import { SectionContainer, Heading } from '@/components'
import { fetchServerData } from '@/utils'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy policy | Landing with Next-Auth',
}

export default async function Privacy() {
  const data = await fetchServerData()
  const {
    pages: { terms },
  } = data

  return (
    <>
      <SectionContainer
        classNames={{
          base: 'even:bg-gray-100',
          container: 'py-24 gap-6 lg:gap-10',
        }}
      >
        <Heading variation="xl">Privacy policy information</Heading>
        <Heading>{terms.part1.title}</Heading>
        <p>{terms.part1.content}</p>
        <Heading variation="md">{terms.part1.title}</Heading>
        <p>{terms.part1.content}</p>
      </SectionContainer>
      <SectionContainer
        classNames={{
          base: 'even:bg-gray-100',
          container: 'py-24 gap-6 lg:gap-10',
        }}
      >
        <Heading>{terms.part2.title}</Heading>
        <p>{terms.part2.content}</p>
        <Heading variation="md">{terms.part2.title}</Heading>
        <p>{terms.part2.content}</p>
      </SectionContainer>
      <SectionContainer
        classNames={{
          base: 'even:bg-gray-100',
          container: 'py-24 gap-6 lg:gap-10',
        }}
      >
        <Heading>{terms.part3.title}</Heading>
        <p>{terms.part3.content}</p>
        <Heading variation="md">{terms.part3.title}</Heading>
        <p>{terms.part3.content}</p>
      </SectionContainer>
    </>
  )
}
