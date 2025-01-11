export const spiralEffect = String.raw`vec2 effect(vec2 p, float i, float time) {
  float r = length(p);
  float theta = atan(p.y, p.x);
  float spiral = sin(r * 10.0 - theta * 3.0 + time * speed);
  return vec2(p.x + spiral * 0.1, p.y + spiral * 0.1);
}`;

export const waveEffect = String.raw`vec2 effect(vec2 p, float i, float time) {
  float wave = sin(p.x * 5.0 + time * speed) * cos(p.y * 5.0 + time * speed);
  return vec2(p.x + wave * 0.1, p.y + wave * 0.1);
}`;

export const vortexEffect = String.raw`vec2 effect(vec2 p, float i, float time) {
  float r = length(p);
  float theta = atan(p.y, p.x);
  float vortex = sin(r * 10.0 + theta * 5.0 + time * speed);
  return vec2(p.x + vortex * p.y * 0.1, p.y - vortex * p.x * 0.1);
}`;
export const defaultEffect = String.raw`vec2 effect(vec2 p, float i, float time) {
  return vec2(sin(p.x * i + (time * speed)) * cos(p.y * i + (time * speed)), sin(length(p.x)) * cos(length(p.y)));
}`


export const effectFunctions = [defaultEffect, spiralEffect, waveEffect, vortexEffect];

