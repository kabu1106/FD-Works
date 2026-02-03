import { z } from 'zod';

export const ScheduleStatusSchema = z.enum(['UNAPPROVED','APPROVED','PENDING']);

export type ScheduleStatusType = `${z.infer<typeof ScheduleStatusSchema>}`

export default ScheduleStatusSchema;
