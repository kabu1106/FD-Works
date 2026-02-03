import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TeamCreateWithoutWorkShiftInputSchema } from './TeamCreateWithoutWorkShiftInputSchema';
import { TeamUncheckedCreateWithoutWorkShiftInputSchema } from './TeamUncheckedCreateWithoutWorkShiftInputSchema';
import { TeamCreateOrConnectWithoutWorkShiftInputSchema } from './TeamCreateOrConnectWithoutWorkShiftInputSchema';
import { TeamUpsertWithWhereUniqueWithoutWorkShiftInputSchema } from './TeamUpsertWithWhereUniqueWithoutWorkShiftInputSchema';
import { TeamCreateManyWorkShiftInputEnvelopeSchema } from './TeamCreateManyWorkShiftInputEnvelopeSchema';
import { TeamWhereUniqueInputSchema } from './TeamWhereUniqueInputSchema';
import { TeamUpdateWithWhereUniqueWithoutWorkShiftInputSchema } from './TeamUpdateWithWhereUniqueWithoutWorkShiftInputSchema';
import { TeamUpdateManyWithWhereWithoutWorkShiftInputSchema } from './TeamUpdateManyWithWhereWithoutWorkShiftInputSchema';
import { TeamScalarWhereInputSchema } from './TeamScalarWhereInputSchema';

export const TeamUpdateManyWithoutWorkShiftNestedInputSchema: z.ZodType<Prisma.TeamUpdateManyWithoutWorkShiftNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => TeamCreateWithoutWorkShiftInputSchema), z.lazy(() => TeamCreateWithoutWorkShiftInputSchema).array(), z.lazy(() => TeamUncheckedCreateWithoutWorkShiftInputSchema), z.lazy(() => TeamUncheckedCreateWithoutWorkShiftInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TeamCreateOrConnectWithoutWorkShiftInputSchema), z.lazy(() => TeamCreateOrConnectWithoutWorkShiftInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TeamUpsertWithWhereUniqueWithoutWorkShiftInputSchema), z.lazy(() => TeamUpsertWithWhereUniqueWithoutWorkShiftInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TeamCreateManyWorkShiftInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TeamWhereUniqueInputSchema), z.lazy(() => TeamWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TeamWhereUniqueInputSchema), z.lazy(() => TeamWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TeamWhereUniqueInputSchema), z.lazy(() => TeamWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TeamWhereUniqueInputSchema), z.lazy(() => TeamWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TeamUpdateWithWhereUniqueWithoutWorkShiftInputSchema), z.lazy(() => TeamUpdateWithWhereUniqueWithoutWorkShiftInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TeamUpdateManyWithWhereWithoutWorkShiftInputSchema), z.lazy(() => TeamUpdateManyWithWhereWithoutWorkShiftInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TeamScalarWhereInputSchema), z.lazy(() => TeamScalarWhereInputSchema).array() ]).optional(),
});

export default TeamUpdateManyWithoutWorkShiftNestedInputSchema;
