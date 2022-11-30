export const propertySetter = (property, value, object) => {
  var keys = property.split(".");
  var propertyName = keys.pop();
  var propertyParent = object;
  while (keys.length > 0) {
    propertyParent = propertyParent[keys.shift()];
  }
  propertyParent[propertyName] = value;
};
