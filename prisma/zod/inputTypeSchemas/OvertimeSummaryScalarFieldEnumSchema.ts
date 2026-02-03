import { z } from 'zod';

export const OvertimeSummaryScalarFieldEnumSchema = z.enum(['id','dutyId','staffId','version','totalMinutes','isFinalized','createdAt','updatedAt']);

export default OvertimeSummaryScalarFieldEnumSchema;
