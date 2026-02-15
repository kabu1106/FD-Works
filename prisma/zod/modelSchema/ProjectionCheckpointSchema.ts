import { z } from 'zod';

/////////////////////////////////////////
// PROJECTION CHECKPOINT SCHEMA
/////////////////////////////////////////

export const ProjectionCheckpointSchema = z.object({
  projectionName: z.string(),
  lastEventId: z.string(),
  lastEventAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type ProjectionCheckpoint = z.infer<typeof ProjectionCheckpointSchema>

export default ProjectionCheckpointSchema;
