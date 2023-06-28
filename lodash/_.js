let _ = {}

/* --------------------------------------------------------------- clamp ---- */

_.clamp = (num, lower, higher) => Math.min(Math.max(num, lower), higher)

/* ------------------------------------------------------------- inRange ---- */

_.inRange = function (num, start, end) {
  if (!end) {
    end = start
    start = 0
  }

  if (start > end) {
    let s = start
    start = end
    end = s
  }

  return start <= num && num < end
}

// Do not write or modify code below this line.
module.exports = _
