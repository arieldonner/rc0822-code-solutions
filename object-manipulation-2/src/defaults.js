/* exported defaults */
function defaults(target, source) {
  for (var keys in source) {
    if (Object.hasOwn(target, keys) === false) {
      target[keys] = source[keys];
    }
  }
}

/* Run a for...in loop that cycles through each of the properties in the source object.
Because we do not want to overwrite existing properties of target, we need to use
a conditional to check if target has the given property in it already or not.
If it does not have the property, we want to add the property and it's paired value
to the target object. */
