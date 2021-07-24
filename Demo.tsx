import { property, signal } from './decorators'
import { add, mul, vec2, zero } from './Vector2'

export default class Demo extends godot.Sprite {
  @property({ default: zero })
  direction: vec2

  @signal
  static readonly OnKeyPressed: string

  _process(delta) {
    // Yes! We can use operators in JavaScript like GDScript
    this.position = add(this.position, mul(this.direction, delta))
  }

  _input(event: InputEvent) {
    if (event.is_action_pressed('ui_right')) {
      const before = godot.OS.get_ticks_msec()
      const lol = []
      for (let i = 0; i < 100000; i++) {
        lol.push(i)
      }
      const after = godot.OS.get_ticks_msec()

      console.log('js took', after - before, 'ms')
    }
  }
}
