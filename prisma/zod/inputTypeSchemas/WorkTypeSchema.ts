import { z } from 'zod';

export const WorkTypeSchema = z.enum(['DUTY_24H','DAY_SHIFT','OFF_DUTY','DAY_OFF']);

export type WorkTypeType = `${z.infer<typeof WorkTypeSchema>}`

export default WorkTypeSchema;
