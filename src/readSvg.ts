const fs = require('fs')
const path = require('path')
const svg2jsx = require('@balajmarius/svg2jsx')

const { log } = console

const filepath = path.resolve(__dirname, 'govern.svg')

function readSvg(){
fs.readFile(filepath, 'utf8', (error: unknown, data: unknown) => {
  if (error) throw new Error('😞 Something went wrong')

  return svg2jsx(data)
    .then((transformedSVG: unknown) => log(transformedSVG))
    .catch((error: unknown) => log(error))
})
}
export {readSvg}
