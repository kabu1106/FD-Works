import { z } from 'zod';
import { Prisma } from '@prisma/client'

/////////////////////////////////////////
// DEPARTMENT SCHEMA
/////////////////////////////////////////

export const DepartmentSchema = z.object({
  id: z.number().int(),
  code: z.string(),
  name: z.string(),
  /**
   * 緯度（例: 35.6895）
   */
  latitude: z.instanceof(Prisma.Decimal, { message: "Field 'latitude' must be a Decimal. Location: ['Models', 'Department']"}).nullable(),
  /**
   * 経度（例: 139.6917）
   */
  longitude: z.instanceof(Prisma.Decimal, { message: "Field 'longitude' must be a Decimal. Location: ['Models', 'Department']"}).nullable(),
  isActive: z.boolean(),
})

export type Department = z.infer<typeof DepartmentSchema>

export default DepartmentSchema;
