export const propertySetter = (property, value, object) => {
  var keys = property.split(".");
  var propertyName = keys.pop();
  var propertyParent = object;
  while (keys.length > 0) {
    propertyParent = propertyParent[keys.shift()];
  }
  propertyParent[propertyName] = value;
};

export const bufferToString = (buffer) => {
  var binary = "";
  var bytes = [].slice.call(new Uint8Array(buffer));
  bytes.forEach((b) => (binary += String.fromCharCode(b)));
  var str = window.btoa(binary);
  return `data:image/jpeg;base64,${str}`;
};
