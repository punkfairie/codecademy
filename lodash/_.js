const _ = {}

/* --------------------------------------------------------------- clamp ---- */

_.clamp = (num, lower, higher) => Math.min(Math.max(num, lower), higher)

/* ------------------------------------------------------------- inRange ---- */

_.inRange = function (num, start, end) {
  if (!end) {
    end = start
    start = 0
  }

  if (start > end) {
    const s = start
    start = end
    end = s
  }

  return start <= num && num < end
}

/* --------------------------------------------------------------- words ---- */

_.words = (string) => string.split(' ')

/* ----------------------------------------------------------------- pad ---- */

_.pad = function (string, length) {
  if (string.length >= length) {
    return string
  }

  const addToStart = Math.floor((length - string.length) / 2)
  const addToEnd = length - string.length - addToStart

  return ' '.repeat(addToStart) + string + ' '.repeat(addToEnd)
}

/* ----------------------------------------------------------------- has ---- */

_.has = function (obj, key) {
  return !!obj[key]
}

// Do not write or modify code below this line.
module.exports = _
