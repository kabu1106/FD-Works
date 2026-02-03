import { z } from 'zod';

export const WorkGroupAssignmentScalarFieldEnumSchema = z.enum(['id','dutyId','staffId','workGroupId','createdAt','updatedAt']);

export default WorkGroupAssignmentScalarFieldEnumSchema;
