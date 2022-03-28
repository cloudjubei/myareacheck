import fs from 'fs'
import path from 'path'

const citiesDirectory = path.join(process.cwd(), 'cities')

export function getCitiesData() {
  const fileNames = fs.readdirSync(citiesDirectory)
  return fileNames.map(fileName => {
    // Remove ".json" from file name to get id
    const id = fileName.replace(/\.json$/, '')

    const fullPath = path.join(citiesDirectory, fileName)
    return fs.readFileSync(fullPath, 'utf8')
  })
}

export function getAllCitiesIds() {
  const fileNames = fs.readdirSync(citiesDirectory)
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.json$/, '')
      }
    }
  })
}

export function getCityData(id) {
  const fullPath = path.join(citiesDirectory, `${id}.json`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const stripped = JSON.stringify(fileContents).replace(/:\n:/g,'')
  const object = JSON.parse(JSON.parse(stripped))
  return object
}
