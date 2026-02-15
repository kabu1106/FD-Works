import { z } from 'zod';

export const IncidentStaffEngagementScalarFieldEnumSchema = z.enum(['id','incidentId','staffId','engagedFrom','engagedTo','createdAt']);

export default IncidentStaffEngagementScalarFieldEnumSchema;
