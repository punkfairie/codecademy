/* Fortune Teller Bot */

const part1 = [
  'I think no, ',
  'I can\'t say for certain, ',
  'You are in complete control, ',
  'It isn\'t long before you\'ll know for sure, ',
  'I\'d say yes, ',
  'It doesn\'t seem possible, ',
  'The result might not be what you are hoping for, ',
]

const part2 = [
  'but you are the only one who can be sure.',
  'but your gut knows.',
  'sometimes it doesn’t seem that way though.',
  'but the outcome looks positive.',
  'this is my best guess.',
  'but many things that don\'t seem possible actually are.',
  'but it will turn out perfectly in the end!',
]

const part3 = 'Your lucky number is '

const buildMsg = function () {
  let msg = ''

  msg += part1[Math.floor(Math.random() * part1.length)]
  msg += part2[Math.floor(Math.random() * part2.length)]

  const luckyNum = Math.floor(Math.random() * 100) + 1
  msg += part3 + luckyNum + '.'

  return msg
}
