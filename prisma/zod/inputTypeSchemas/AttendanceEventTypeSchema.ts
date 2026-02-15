import { z } from 'zod';

export const AttendanceEventTypeSchema = z.enum(['WORK_STARTED','BREAK_STARTED','BREAK_ENDED','WORK_ENDED']);

export type AttendanceEventTypeType = `${z.infer<typeof AttendanceEventTypeSchema>}`

export default AttendanceEventTypeSchema;
