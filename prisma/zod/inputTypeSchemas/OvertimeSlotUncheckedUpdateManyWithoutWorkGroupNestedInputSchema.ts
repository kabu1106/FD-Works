import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OvertimeSlotCreateWithoutWorkGroupInputSchema } from './OvertimeSlotCreateWithoutWorkGroupInputSchema';
import { OvertimeSlotUncheckedCreateWithoutWorkGroupInputSchema } from './OvertimeSlotUncheckedCreateWithoutWorkGroupInputSchema';
import { OvertimeSlotCreateOrConnectWithoutWorkGroupInputSchema } from './OvertimeSlotCreateOrConnectWithoutWorkGroupInputSchema';
import { OvertimeSlotUpsertWithWhereUniqueWithoutWorkGroupInputSchema } from './OvertimeSlotUpsertWithWhereUniqueWithoutWorkGroupInputSchema';
import { OvertimeSlotCreateManyWorkGroupInputEnvelopeSchema } from './OvertimeSlotCreateManyWorkGroupInputEnvelopeSchema';
import { OvertimeSlotWhereUniqueInputSchema } from './OvertimeSlotWhereUniqueInputSchema';
import { OvertimeSlotUpdateWithWhereUniqueWithoutWorkGroupInputSchema } from './OvertimeSlotUpdateWithWhereUniqueWithoutWorkGroupInputSchema';
import { OvertimeSlotUpdateManyWithWhereWithoutWorkGroupInputSchema } from './OvertimeSlotUpdateManyWithWhereWithoutWorkGroupInputSchema';
import { OvertimeSlotScalarWhereInputSchema } from './OvertimeSlotScalarWhereInputSchema';

export const OvertimeSlotUncheckedUpdateManyWithoutWorkGroupNestedInputSchema: z.ZodType<Prisma.OvertimeSlotUncheckedUpdateManyWithoutWorkGroupNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => OvertimeSlotCreateWithoutWorkGroupInputSchema), z.lazy(() => OvertimeSlotCreateWithoutWorkGroupInputSchema).array(), z.lazy(() => OvertimeSlotUncheckedCreateWithoutWorkGroupInputSchema), z.lazy(() => OvertimeSlotUncheckedCreateWithoutWorkGroupInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OvertimeSlotCreateOrConnectWithoutWorkGroupInputSchema), z.lazy(() => OvertimeSlotCreateOrConnectWithoutWorkGroupInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => OvertimeSlotUpsertWithWhereUniqueWithoutWorkGroupInputSchema), z.lazy(() => OvertimeSlotUpsertWithWhereUniqueWithoutWorkGroupInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OvertimeSlotCreateManyWorkGroupInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => OvertimeSlotWhereUniqueInputSchema), z.lazy(() => OvertimeSlotWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => OvertimeSlotWhereUniqueInputSchema), z.lazy(() => OvertimeSlotWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => OvertimeSlotWhereUniqueInputSchema), z.lazy(() => OvertimeSlotWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => OvertimeSlotWhereUniqueInputSchema), z.lazy(() => OvertimeSlotWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => OvertimeSlotUpdateWithWhereUniqueWithoutWorkGroupInputSchema), z.lazy(() => OvertimeSlotUpdateWithWhereUniqueWithoutWorkGroupInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => OvertimeSlotUpdateManyWithWhereWithoutWorkGroupInputSchema), z.lazy(() => OvertimeSlotUpdateManyWithWhereWithoutWorkGroupInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => OvertimeSlotScalarWhereInputSchema), z.lazy(() => OvertimeSlotScalarWhereInputSchema).array() ]).optional(),
});

export default OvertimeSlotUncheckedUpdateManyWithoutWorkGroupNestedInputSchema;
