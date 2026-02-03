import { z } from 'zod';

export const TeamWorkOverrideReasonSchema = z.enum(['DISASTER','SPECIAL_EVENT','STAFF_SHORTAGE','MANUAL']);

export type TeamWorkOverrideReasonType = `${z.infer<typeof TeamWorkOverrideReasonSchema>}`

export default TeamWorkOverrideReasonSchema;
