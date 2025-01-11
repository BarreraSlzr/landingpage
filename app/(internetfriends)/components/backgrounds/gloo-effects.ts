export const defaultEffect = String.raw`vec2 effect(vec2 p, float i, float time) {
  return vec2(sin(p.x * i + (time * speed)) * cos(p.y * i + (time * speed)), sin(length(p.x)) * cos(length(p.y)));
}`;

export const spiralEffect = String.raw`vec2 effect(vec2 p, float i, float time) {
  float r = length(p);
  float theta = atan(p.y, p.x);
  float spiral = sin(r * 10.0 - theta * 3.0 + time * speed);
  return vec2(sin(p.x * i + spiral + (time * speed)) * cos(p.y * i + spiral + (time * speed)), sin(length(p.x + spiral)) * cos(length(p.y + spiral)));
}`;

export const waveEffect = String.raw`vec2 effect(vec2 p, float i, float time) {
  float wave = sin(p.x * 5.0 + time * speed) * cos(p.y * 5.0 + time * speed);
  return vec2(sin(p.x * i + wave + (time * speed)) * cos(p.y * i + wave + (time * speed)), sin(length(p.x + wave)) * cos(length(p.y + wave)));
}`;

export const vortexEffect = String.raw`vec2 effect(vec2 p, float i, float time) {
  float r = length(p);
  float theta = atan(p.y, p.x);
  float vortex = sin(r * 10.0 + theta * 5.0 + time * speed);
  return vec2(sin(p.x * i + vortex + (time * speed)) * cos(p.y * i + vortex + (time * speed)), sin(length(p.x + vortex)) * cos(length(p.y + vortex)));
}`;

export const effectFunctions = [defaultEffect, spiralEffect, waveEffect, vortexEffect];
