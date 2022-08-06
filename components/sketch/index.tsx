import React from 'react'
import dynamic from 'next/dynamic'

import p5 from 'p5'
import draw from './draw'
import events from './events'

// Will only import `react-p5` on client-side
// @ts-ignore
const Sketch = dynamic(() => import('react-p5').then((mod) => mod.default), {
  ssr: false,
})

export interface ComponentProps {
  width: number
  height: number
}

export const SketchComponent: React.FC<ComponentProps> = (
  props: ComponentProps,
) => {
  const setup = (p5: p5, canvasParentRef: Element) => {
    p5.createCanvas(props.width, props.height).parent(canvasParentRef)
    events(p5, props)
  }

  // @ts-ignore
  return <Sketch setup={setup} draw={draw} />
}
