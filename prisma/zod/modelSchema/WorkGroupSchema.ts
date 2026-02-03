import { z } from 'zod';

/////////////////////////////////////////
// WORK GROUP SCHEMA
/////////////////////////////////////////

export const WorkGroupSchema = z.object({
  id: z.number().int(),
  code: z.string(),
  name: z.string(),
})

export type WorkGroup = z.infer<typeof WorkGroupSchema>

export default WorkGroupSchema;
