import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SubstituteHolidayCreateWithoutStaffInputSchema } from './SubstituteHolidayCreateWithoutStaffInputSchema';
import { SubstituteHolidayUncheckedCreateWithoutStaffInputSchema } from './SubstituteHolidayUncheckedCreateWithoutStaffInputSchema';
import { SubstituteHolidayCreateOrConnectWithoutStaffInputSchema } from './SubstituteHolidayCreateOrConnectWithoutStaffInputSchema';
import { SubstituteHolidayUpsertWithWhereUniqueWithoutStaffInputSchema } from './SubstituteHolidayUpsertWithWhereUniqueWithoutStaffInputSchema';
import { SubstituteHolidayCreateManyStaffInputEnvelopeSchema } from './SubstituteHolidayCreateManyStaffInputEnvelopeSchema';
import { SubstituteHolidayWhereUniqueInputSchema } from './SubstituteHolidayWhereUniqueInputSchema';
import { SubstituteHolidayUpdateWithWhereUniqueWithoutStaffInputSchema } from './SubstituteHolidayUpdateWithWhereUniqueWithoutStaffInputSchema';
import { SubstituteHolidayUpdateManyWithWhereWithoutStaffInputSchema } from './SubstituteHolidayUpdateManyWithWhereWithoutStaffInputSchema';
import { SubstituteHolidayScalarWhereInputSchema } from './SubstituteHolidayScalarWhereInputSchema';

export const SubstituteHolidayUpdateManyWithoutStaffNestedInputSchema: z.ZodType<Prisma.SubstituteHolidayUpdateManyWithoutStaffNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => SubstituteHolidayCreateWithoutStaffInputSchema), z.lazy(() => SubstituteHolidayCreateWithoutStaffInputSchema).array(), z.lazy(() => SubstituteHolidayUncheckedCreateWithoutStaffInputSchema), z.lazy(() => SubstituteHolidayUncheckedCreateWithoutStaffInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SubstituteHolidayCreateOrConnectWithoutStaffInputSchema), z.lazy(() => SubstituteHolidayCreateOrConnectWithoutStaffInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => SubstituteHolidayUpsertWithWhereUniqueWithoutStaffInputSchema), z.lazy(() => SubstituteHolidayUpsertWithWhereUniqueWithoutStaffInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SubstituteHolidayCreateManyStaffInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => SubstituteHolidayWhereUniqueInputSchema), z.lazy(() => SubstituteHolidayWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => SubstituteHolidayWhereUniqueInputSchema), z.lazy(() => SubstituteHolidayWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => SubstituteHolidayWhereUniqueInputSchema), z.lazy(() => SubstituteHolidayWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => SubstituteHolidayWhereUniqueInputSchema), z.lazy(() => SubstituteHolidayWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => SubstituteHolidayUpdateWithWhereUniqueWithoutStaffInputSchema), z.lazy(() => SubstituteHolidayUpdateWithWhereUniqueWithoutStaffInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => SubstituteHolidayUpdateManyWithWhereWithoutStaffInputSchema), z.lazy(() => SubstituteHolidayUpdateManyWithWhereWithoutStaffInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => SubstituteHolidayScalarWhereInputSchema), z.lazy(() => SubstituteHolidayScalarWhereInputSchema).array() ]).optional(),
});

export default SubstituteHolidayUpdateManyWithoutStaffNestedInputSchema;
