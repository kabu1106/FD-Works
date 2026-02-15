import { z } from 'zod';

export const IncidentReadModelScalarFieldEnumSchema = z.enum(['id','dutyId','locationId','status','occurredAt','closedAt','updatedAt']);

export default IncidentReadModelScalarFieldEnumSchema;
