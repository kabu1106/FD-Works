import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OvertimeSlotCreateWithoutOvertimeRateCategoryInputSchema } from './OvertimeSlotCreateWithoutOvertimeRateCategoryInputSchema';
import { OvertimeSlotUncheckedCreateWithoutOvertimeRateCategoryInputSchema } from './OvertimeSlotUncheckedCreateWithoutOvertimeRateCategoryInputSchema';
import { OvertimeSlotCreateOrConnectWithoutOvertimeRateCategoryInputSchema } from './OvertimeSlotCreateOrConnectWithoutOvertimeRateCategoryInputSchema';
import { OvertimeSlotCreateManyOvertimeRateCategoryInputEnvelopeSchema } from './OvertimeSlotCreateManyOvertimeRateCategoryInputEnvelopeSchema';
import { OvertimeSlotWhereUniqueInputSchema } from './OvertimeSlotWhereUniqueInputSchema';

export const OvertimeSlotUncheckedCreateNestedManyWithoutOvertimeRateCategoryInputSchema: z.ZodType<Prisma.OvertimeSlotUncheckedCreateNestedManyWithoutOvertimeRateCategoryInput> = z.strictObject({
  create: z.union([ z.lazy(() => OvertimeSlotCreateWithoutOvertimeRateCategoryInputSchema), z.lazy(() => OvertimeSlotCreateWithoutOvertimeRateCategoryInputSchema).array(), z.lazy(() => OvertimeSlotUncheckedCreateWithoutOvertimeRateCategoryInputSchema), z.lazy(() => OvertimeSlotUncheckedCreateWithoutOvertimeRateCategoryInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OvertimeSlotCreateOrConnectWithoutOvertimeRateCategoryInputSchema), z.lazy(() => OvertimeSlotCreateOrConnectWithoutOvertimeRateCategoryInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OvertimeSlotCreateManyOvertimeRateCategoryInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => OvertimeSlotWhereUniqueInputSchema), z.lazy(() => OvertimeSlotWhereUniqueInputSchema).array() ]).optional(),
});

export default OvertimeSlotUncheckedCreateNestedManyWithoutOvertimeRateCategoryInputSchema;
