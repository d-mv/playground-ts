import fs from 'fs'
import path from 'path'
import svg2jsx from '@balajmarius/svg2jsx'

const { log } = console

const filepath = path.resolve(__dirname, 'govern.svg')

function readSvg() {
  fs.readFile(filepath, 'utf8', (error: unknown, data: string) => {
    if (error) throw new Error('😞 Something went wrong')

    return svg2jsx(data, { type: 'functional', cleanupIDs: true, jsxSingleQuote: true, memo: false })
      .then((transformedSVG: unknown) => log(transformedSVG))
      .catch((error: unknown) => log(error))
  })
}

export { readSvg }
