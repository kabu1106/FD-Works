import { z } from 'zod';

export const AttendanceEventScalarFieldEnumSchema = z.enum(['id','dutyId','staffId','type','occurredAt','createdAt']);

export default AttendanceEventScalarFieldEnumSchema;
