var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { property, signal } from './decorators';
import { add, mul, zero } from './Vector2';
export default class Demo extends godot.Sprite {
    _process(delta) {
        // Yes! We can use operators in JavaScript like GDScript
        this.position = add(this.position, mul(this.direction, delta));
    }
    _input(event) {
        if (event.is_action_pressed('ui_right')) {
            const before = godot.OS.get_ticks_msec();
            const lol = [];
            for (let i = 0; i < 100000; i++) {
                lol.push(i);
            }
            const after = godot.OS.get_ticks_msec();
            console.log('js took', after - before, 'ms');
        }
    }
}
__decorate([
    property({ default: zero })
], Demo.prototype, "direction", void 0);
__decorate([
    signal
], Demo, "OnKeyPressed", void 0);
//# sourceMappingURL=Demo.jsx.map