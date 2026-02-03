import { z } from 'zod';
import { Prisma } from '@prisma/client'

/////////////////////////////////////////
// HOSPITAL SCHEMA
/////////////////////////////////////////

export const HospitalSchema = z.object({
  id: z.number().int(),
  code: z.string(),
  name: z.string(),
  /**
   * 緯度（例: 35.6895）
   */
  latitude: z.instanceof(Prisma.Decimal, { message: "Field 'latitude' must be a Decimal. Location: ['Models', 'Hospital']"}).nullable(),
  /**
   * 経度（例: 139.6917）
   */
  longitude: z.instanceof(Prisma.Decimal, { message: "Field 'longitude' must be a Decimal. Location: ['Models', 'Hospital']"}).nullable(),
})

export type Hospital = z.infer<typeof HospitalSchema>

export default HospitalSchema;
