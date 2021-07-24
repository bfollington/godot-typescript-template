import { node, property, signal } from './decorators'
import Demo from './Demo'
import { add, mul, vec2, zero } from './Vector2'

export default class Listener extends godot.Sprite {
  @property({ default: zero })
  direction: vec2

  @node
  Signaller: godot.Sprite

  _ready() {
    this.Signaller.connect(Demo.OnKeyPressed, (arg: number) => {
      // console.log('got signal', arg)
    })
  }
}
