import { z } from 'zod';

export const AttendanceScalarFieldEnumSchema = z.enum(['id','dutyId','departmentId','staffId','type','startTime','endTime','createdAt','updatedAt']);

export default AttendanceScalarFieldEnumSchema;
