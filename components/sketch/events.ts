import p5 from 'p5'
import { ComponentProps } from '.'

const DEFAULT_SCALE = 50
const DEFAULT_THICKNESS = 1

const SQUARE = [
  { x: 0, y: 0, z: 0 },
  { x: 0, y: 1, z: 0 },
  { x: 1, y: 1, z: 0 },
  { x: 1, y: 0, z: 0 },
]

const TRIANGLE = [
  { x: 0, y: 0, z: 0 },
  { x: 0, y: 1, z: 0 },
  { x: 1, y: 0, z: 0 },
]

export type SHAPE = {
  v: { x: number; y: number; z: number }[]
  stroke: string
  strokeWeight: number
  fill: string
  scale: number
  rotation: number[]
  skew: { x: number; y: number }
  translate: { x: number; y: number; z: number }
  metadata: Record<string, string>[]
}

function drawShapes(p5: p5, shapes: SHAPE[]) {
  shapes.map((shape: SHAPE) => {
    p5.beginShape()
    p5.stroke(shape.stroke)
    p5.strokeWeight(shape.strokeWeight)
    p5.fill(shape.fill)
    shape.v.map((point) => {
      p5.vertex(point.x, point.y, point.z)
    })
    p5.scale(shape.scale)
    p5.rotateX(shape.rotation[0])
    p5.rotateY(shape.rotation[1])
    p5.rotateZ(shape.rotation[2])
    p5.shearX(shape.skew.x)
    p5.shearY(shape.skew.y)
    p5.translate(shape.translate.x, shape.translate.y, shape.translate.z)
    p5.endShape(p5.CLOSE)
  })
}

export function drawBg(p5: p5) {
  // background
  p5.background(25)
}

export default function events(p5: p5, props: ComponentProps) {
  drawBg(p5)
  // coordinates
  drawShapes(p5, [
    {
      fill: '#aa0000',
      stroke: '#ff0000',
      strokeWeight: DEFAULT_THICKNESS,
      rotation: [0, 0, 0],
      scale: DEFAULT_SCALE,
      v: SQUARE,
      translate: { x: 0, y: 0, z: 0 },
      skew: { x: 0, y: 0 },
      metadata: [],
    },
  ])
}
