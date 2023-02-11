import React from 'react'
import { LayoutProps } from '@models'

export const EmptyLayout = ({children}: LayoutProps) => {
  return (
    <div>{children}</div>
  )
}
