import fs from 'fs'
import path from 'path'

const postsDirectory = path.join(process.cwd(), 'cities')

export function getCitiesData() {
  // Get file names under /cities
  const fileNames = fs.readdirSync(postsDirectory)
  const allCitiesData = fileNames.map(fileName => {
    // Remove ".json" from file name to get id
    const id = fileName.replace(/\.json$/, '')

    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    return {
      id,
      ...fileContents
    }
  })
  return allCitiesData
}

export function getAllCitiesIds() {
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.json$/, '')
      }
    }
  })
}

export async function getCityData(id) {
  const fullPath = path.join(postsDirectory, `${id}.json`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  const stripped = JSON.stringify(fileContents).replaceAll('\n','')
  const object = JSON.parse(JSON.parse(stripped))
  return {
    id,
    ...object
  }
}
