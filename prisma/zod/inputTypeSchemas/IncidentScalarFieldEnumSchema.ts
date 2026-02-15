import { z } from 'zod';

export const IncidentScalarFieldEnumSchema = z.enum(['id','dutyId','categoryId','typeId','locationId','destinationId','destinationName','occurredAt','status','isDeleted','createdAt','updatedAt']);

export default IncidentScalarFieldEnumSchema;
