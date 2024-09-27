import * as fs from 'fs/promises'
import * as path from 'path'

export class FileSevice<T> {
  private filePath: string

  constructor(fileName: string) {
    this.filePath = path.resolve(__dirname, fileName)
  }

  async find(): Promise<T[]> {
    try {
      const data = await fs.readFile(this.filePath, 'utf8')
      return JSON.parse(data) as T[]
    } catch (error) {
      console.error('Error reading file:', error)
      return []
    }
  }

  private async writeData(data: T[]): Promise<void> {
    try {
      const jsonData = JSON.stringify(data, null, 2)
      await fs.writeFile(this.filePath, jsonData, 'utf8')
    } catch (error) {
      console.error('Error writing file:', error)
    }
  }

  async insertOne(newItem: T): Promise<void> {
    const currentData = await this.find()
    currentData.push(newItem)
    await this.writeData(currentData)
  }

  async deleteOne(predicate: (item: T) => boolean): Promise<void> {
    const currentData = await this.find()
    const filteredData = currentData.filter((item) => !predicate(item))
    if (filteredData.length === currentData.length) {
      console.log('No item was removed.')
    } else {
      await this.writeData(filteredData)
      console.log('Item removed successfully.')
    }
  }
}
