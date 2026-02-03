import { z } from 'zod';

export const ShiftTypeSchema = z.enum(['DUTY_24H','DAY_SHIFT']);

export type ShiftTypeType = `${z.infer<typeof ShiftTypeSchema>}`

export default ShiftTypeSchema;
