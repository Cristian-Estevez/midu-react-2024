import { LazyExoticComponent } from 'react'

export interface RouteProps {
  path: string
  Component: LazyExoticComponent<() => JSX.Element>
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function Route(_props: RouteProps) {
  return null
}
