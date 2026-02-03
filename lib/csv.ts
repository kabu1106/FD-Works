import fs from 'fs'
import { parse } from 'csv-parse/sync'

export function readCsv<T>(path: string): T[] {
  const content = fs.readFileSync(path, 'utf-8')
  return parse(content, {
    columns: true,
    skip_empty_lines: true,
    trim: true,
  }) as T[]
}
