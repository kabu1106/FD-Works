import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AllowanceGroupArgsSchema } from "../outputTypeSchemas/AllowanceGroupArgsSchema"
import { IncidentStaffAllowanceFindManyArgsSchema } from "../outputTypeSchemas/IncidentStaffAllowanceFindManyArgsSchema"
import { IncidentAllowanceSummaryFindManyArgsSchema } from "../outputTypeSchemas/IncidentAllowanceSummaryFindManyArgsSchema"
import { AllowanceTypeCountOutputTypeArgsSchema } from "../outputTypeSchemas/AllowanceTypeCountOutputTypeArgsSchema"

export const AllowanceTypeSelectSchema: z.ZodType<Prisma.AllowanceTypeSelect> = z.object({
  id: z.boolean().optional(),
  allowanceGroupId: z.boolean().optional(),
  code: z.boolean().optional(),
  name: z.boolean().optional(),
  isActive: z.boolean().optional(),
  allowanceGroup: z.union([z.boolean(),z.lazy(() => AllowanceGroupArgsSchema)]).optional(),
  IncidentStaffAllowance: z.union([z.boolean(),z.lazy(() => IncidentStaffAllowanceFindManyArgsSchema)]).optional(),
  IncidentAllowanceSummary: z.union([z.boolean(),z.lazy(() => IncidentAllowanceSummaryFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => AllowanceTypeCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default AllowanceTypeSelectSchema;
