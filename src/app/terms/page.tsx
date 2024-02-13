import { SectionContainer, Heading } from '@/components'
import { fetchServerData } from '@/utils'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms and Conditions | Landing with Next-Auth',
}

export default async function Terms() {
  const data = await fetchServerData()
  const {
    pages: { privacy },
  } = data

  return (
    <>
      <SectionContainer
        classNames={{
          base: 'even:bg-gray-100',
          container: 'py-24 gap-6 lg:gap-10',
        }}
      >
        <Heading variation="xl">Terms and conditions</Heading>
        <Heading>{privacy.part1.title}</Heading>
        <p>{privacy.part1.content}</p>
        <Heading variation="md">{privacy.part1.title}</Heading>
        <p>{privacy.part1.content}</p>
      </SectionContainer>
      <SectionContainer
        classNames={{
          base: 'even:bg-gray-100',
          container: 'py-24 gap-6 lg:gap-10',
        }}
      >
        <Heading>{privacy.part2.title}</Heading>
        <p>{privacy.part2.content}</p>
        <Heading variation="md">{privacy.part2.title}</Heading>
        <p>{privacy.part2.content}</p>
      </SectionContainer>
      <SectionContainer
        classNames={{
          base: 'even:bg-gray-100',
          container: 'py-24 gap-6 lg:gap-10',
        }}
      >
        <Heading>{privacy.part3.title}</Heading>
        <p>{privacy.part3.content}</p>
        <Heading variation="md">{privacy.part3.title}</Heading>
        <p>{privacy.part3.content}</p>
      </SectionContainer>
    </>
  )
}
