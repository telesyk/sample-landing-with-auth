import { Button, Input } from '@nextui-org/react'
import React from 'react'

export default function SubscribeForm() {
  return (
    <form className="flex gap-4 justify-center items-center">
      <Input
        isRequired
        type="email"
        label="Email"
        className="min-w-72"
        variant="bordered"
        size="sm"
      />
      <Button
        size="lg"
        color="warning"
        variant="flat"
        radius="full"
        className="min-w-40"
      >
        Subscribe
      </Button>
    </form>
  )
}
