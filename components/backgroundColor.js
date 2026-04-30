let avalue = 'green';
const listeners = new Set();

export function getAValue() { return avalue; }
export function setAValue(v) {
  avalue = v;
  listeners.forEach(fn => fn(avalue));
}
export function subscribeAValue(fn) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}