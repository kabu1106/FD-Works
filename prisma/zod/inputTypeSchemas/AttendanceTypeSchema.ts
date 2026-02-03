import { z } from 'zod';

export const AttendanceTypeSchema = z.enum(['WORK_START','BREAK_START','BREAK_OUT','WORK_OUT']);

export type AttendanceTypeType = `${z.infer<typeof AttendanceTypeSchema>}`

export default AttendanceTypeSchema;
