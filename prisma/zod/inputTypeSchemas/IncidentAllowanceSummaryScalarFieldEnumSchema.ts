import { z } from 'zod';

export const IncidentAllowanceSummaryScalarFieldEnumSchema = z.enum(['id','incidentStaffId','allowanceTypeId','version','count','isFinalized']);

export default IncidentAllowanceSummaryScalarFieldEnumSchema;
