import { z } from 'zod';

export const IncidentStatusSchema = z.enum(['OPEN','CLOSED']);

export type IncidentStatusType = `${z.infer<typeof IncidentStatusSchema>}`

export default IncidentStatusSchema;
