import fs from 'fs'
import path from 'path'

const postsDirectory = path.join(process.cwd(), 'cities')

export function getCitiesData() {
  // Get file names under /cities
  const fileNames = fs.readdirSync(postsDirectory)
  const allCitiesData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.json$/, '')

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Combine the data with the id
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

  // Combine the data with the id
  return {
    id,
    ...fileContents
  }
}
