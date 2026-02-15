import { z } from 'zod';

export const ProjectionCheckpointScalarFieldEnumSchema = z.enum(['projectionName','lastEventId','lastEventAt','updatedAt']);

export default ProjectionCheckpointScalarFieldEnumSchema;
