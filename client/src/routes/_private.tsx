import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_private')({
  component: () => <div>Hello /_private!</div>,
})
