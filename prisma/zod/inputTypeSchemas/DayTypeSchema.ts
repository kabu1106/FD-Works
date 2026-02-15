import { z } from 'zod';

export const DayTypeSchema = z.enum(['WEEKDAY','WEEKLY_DAY_OFF','HOLIDAY','SUBSTITUTE_HOLIDAY']);

export type DayTypeType = `${z.infer<typeof DayTypeSchema>}`

export default DayTypeSchema;
