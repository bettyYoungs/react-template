import React from "react"

const lazyLoad = (path: string) => {
  const Comp = React.lazy(() => import(path))
  return (
    <React.Suspense fallback={<>加载中...</>}>
      <Comp />
    </React.Suspense>
  )
}

export default lazyLoad