import { z } from 'zod';

export const SpecialLeaveAssignmentScalarFieldEnumSchema = z.enum(['id','dutyId','staffId','specialLeaveTypeId','baseDate','startTime','endTime','createdAt','updatedAt']);

export default SpecialLeaveAssignmentScalarFieldEnumSchema;
