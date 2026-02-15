import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SubstituteHolidayScalarWhereInputSchema } from './SubstituteHolidayScalarWhereInputSchema';
import { SubstituteHolidayUpdateManyMutationInputSchema } from './SubstituteHolidayUpdateManyMutationInputSchema';
import { SubstituteHolidayUncheckedUpdateManyWithoutStaffInputSchema } from './SubstituteHolidayUncheckedUpdateManyWithoutStaffInputSchema';

export const SubstituteHolidayUpdateManyWithWhereWithoutStaffInputSchema: z.ZodType<Prisma.SubstituteHolidayUpdateManyWithWhereWithoutStaffInput> = z.strictObject({
  where: z.lazy(() => SubstituteHolidayScalarWhereInputSchema),
  data: z.union([ z.lazy(() => SubstituteHolidayUpdateManyMutationInputSchema), z.lazy(() => SubstituteHolidayUncheckedUpdateManyWithoutStaffInputSchema) ]),
});

export default SubstituteHolidayUpdateManyWithWhereWithoutStaffInputSchema;
