export type vec2 = godot.Vector2

export const zero = godot.Vector2.ZERO

export function mul(vec: godot.Vector2, ...nums: number[]) {
    const { x, y } = vec;

    return new godot.Vector2(nums.reduce((curr, n) => curr * n, x), nums.reduce((curr, n) => curr * n, y));
}

export function add(a: godot.Vector2, b: godot.Vector2) {
    return new godot.Vector2(a.x + b.x, a.y + b.y);
}

export function sub(a: godot.Vector2, b: godot.Vector2) {
    return new godot.Vector2(a.x - b.x, a.y - b.y);
}