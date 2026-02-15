import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SubstituteHolidayCreateWithoutStaffInputSchema } from './SubstituteHolidayCreateWithoutStaffInputSchema';
import { SubstituteHolidayUncheckedCreateWithoutStaffInputSchema } from './SubstituteHolidayUncheckedCreateWithoutStaffInputSchema';
import { SubstituteHolidayCreateOrConnectWithoutStaffInputSchema } from './SubstituteHolidayCreateOrConnectWithoutStaffInputSchema';
import { SubstituteHolidayCreateManyStaffInputEnvelopeSchema } from './SubstituteHolidayCreateManyStaffInputEnvelopeSchema';
import { SubstituteHolidayWhereUniqueInputSchema } from './SubstituteHolidayWhereUniqueInputSchema';

export const SubstituteHolidayCreateNestedManyWithoutStaffInputSchema: z.ZodType<Prisma.SubstituteHolidayCreateNestedManyWithoutStaffInput> = z.strictObject({
  create: z.union([ z.lazy(() => SubstituteHolidayCreateWithoutStaffInputSchema), z.lazy(() => SubstituteHolidayCreateWithoutStaffInputSchema).array(), z.lazy(() => SubstituteHolidayUncheckedCreateWithoutStaffInputSchema), z.lazy(() => SubstituteHolidayUncheckedCreateWithoutStaffInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SubstituteHolidayCreateOrConnectWithoutStaffInputSchema), z.lazy(() => SubstituteHolidayCreateOrConnectWithoutStaffInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SubstituteHolidayCreateManyStaffInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => SubstituteHolidayWhereUniqueInputSchema), z.lazy(() => SubstituteHolidayWhereUniqueInputSchema).array() ]).optional(),
});

export default SubstituteHolidayCreateNestedManyWithoutStaffInputSchema;
