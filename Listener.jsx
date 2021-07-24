var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { node, property } from './decorators';
import Demo from './Demo';
import { zero } from './Vector2';
export default class Listener extends godot.Sprite {
	_ready() {
		this.Signaller.connect(Demo.OnKeyPressed, (arg) => {
			// console.log('got signal', arg)
		});
	}
}
__decorate([
	property({ default: zero })
], Listener.prototype, "direction", void 0);
__decorate([
	node
], Listener.prototype, "Signaller", void 0);
//# sourceMappingURL=Listener.jsx.map
