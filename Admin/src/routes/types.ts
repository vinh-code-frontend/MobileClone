export type RouteConfig = {
  key: string
  path: string
  title: string
  component: JSX.Element
  sidebarLink?: boolean
}

export type GetPathAction = () => RouteConfig
