import p5 from 'p5'
import { ComponentProps } from '.'

const DEFAULT_SCALE = 50
const DEFAULT_THICKNESS = 1
let X: number, Y: number

const shapes = [
  {
    fill: '#aa0000',
    stroke: '#ff0000',
    strokeWeight: DEFAULT_THICKNESS,
    rotation: 0,
    scale: DEFAULT_SCALE,
    v: [
      { x: 0, y: 0 },
      { x: 0, y: 1 },
      { x: 1, y: 1 },
      { x: 1, y: 0 },
    ],
    translate: { x: 0, y: 0 },
    skew: { x: 0, y: 0 },
    metadata: [],
  },
]

function drawShapes(p5: p5) {
  shapes.map((coordinate) => {
    p5.stroke(coordinate.stroke)
    p5.strokeWeight(coordinate.strokeWeight)
    p5.fill(coordinate.fill)
    p5.beginShape()
    coordinate.v.map((point) => {
      const x = X + point.x * coordinate.scale + coordinate.translate.x
      const y = Y + point.y * coordinate.scale + coordinate.translate.y
      p5.vertex(x, y)
    })
    p5.endShape(p5.CLOSE)
  })
}

export function drawBg(p5: p5) {
  // background
  p5.background(25)
}

export default function events(p5: p5, props: ComponentProps) {
  drawBg(p5)
  // get normalized vectors
  X = props.width / 2
  Y = props.height / 2
  // coordinates
  drawShapes(p5)
}
