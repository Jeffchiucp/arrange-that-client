export function uuid(type) {
  var text
  if (type === 'container')
    text = "c"
  else
    text = "i"
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

  for (var i = 0; i < 8; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length))

  return text
}