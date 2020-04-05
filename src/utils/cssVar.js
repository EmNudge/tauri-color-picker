export function updateRootProp(str, val) {
  document.documentElement.style.setProperty(str, val);
}

export function toDarkMode() {
  updateRootProp('--input-bg', '#fff1');
  updateRootProp('--color', 'white');
}
export function toLightMode() {
  updateRootProp('--input-bg', '#0001');
  updateRootProp('--color', 'black');
}

