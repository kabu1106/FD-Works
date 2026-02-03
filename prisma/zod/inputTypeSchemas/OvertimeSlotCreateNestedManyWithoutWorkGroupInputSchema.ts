import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OvertimeSlotCreateWithoutWorkGroupInputSchema } from './OvertimeSlotCreateWithoutWorkGroupInputSchema';
import { OvertimeSlotUncheckedCreateWithoutWorkGroupInputSchema } from './OvertimeSlotUncheckedCreateWithoutWorkGroupInputSchema';
import { OvertimeSlotCreateOrConnectWithoutWorkGroupInputSchema } from './OvertimeSlotCreateOrConnectWithoutWorkGroupInputSchema';
import { OvertimeSlotCreateManyWorkGroupInputEnvelopeSchema } from './OvertimeSlotCreateManyWorkGroupInputEnvelopeSchema';
import { OvertimeSlotWhereUniqueInputSchema } from './OvertimeSlotWhereUniqueInputSchema';

export const OvertimeSlotCreateNestedManyWithoutWorkGroupInputSchema: z.ZodType<Prisma.OvertimeSlotCreateNestedManyWithoutWorkGroupInput> = z.strictObject({
  create: z.union([ z.lazy(() => OvertimeSlotCreateWithoutWorkGroupInputSchema), z.lazy(() => OvertimeSlotCreateWithoutWorkGroupInputSchema).array(), z.lazy(() => OvertimeSlotUncheckedCreateWithoutWorkGroupInputSchema), z.lazy(() => OvertimeSlotUncheckedCreateWithoutWorkGroupInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OvertimeSlotCreateOrConnectWithoutWorkGroupInputSchema), z.lazy(() => OvertimeSlotCreateOrConnectWithoutWorkGroupInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OvertimeSlotCreateManyWorkGroupInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => OvertimeSlotWhereUniqueInputSchema), z.lazy(() => OvertimeSlotWhereUniqueInputSchema).array() ]).optional(),
});

export default OvertimeSlotCreateNestedManyWithoutWorkGroupInputSchema;
