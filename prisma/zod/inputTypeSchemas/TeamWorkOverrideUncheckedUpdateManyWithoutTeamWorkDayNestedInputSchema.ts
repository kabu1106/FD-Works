import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TeamWorkOverrideCreateWithoutTeamWorkDayInputSchema } from './TeamWorkOverrideCreateWithoutTeamWorkDayInputSchema';
import { TeamWorkOverrideUncheckedCreateWithoutTeamWorkDayInputSchema } from './TeamWorkOverrideUncheckedCreateWithoutTeamWorkDayInputSchema';
import { TeamWorkOverrideCreateOrConnectWithoutTeamWorkDayInputSchema } from './TeamWorkOverrideCreateOrConnectWithoutTeamWorkDayInputSchema';
import { TeamWorkOverrideUpsertWithWhereUniqueWithoutTeamWorkDayInputSchema } from './TeamWorkOverrideUpsertWithWhereUniqueWithoutTeamWorkDayInputSchema';
import { TeamWorkOverrideCreateManyTeamWorkDayInputEnvelopeSchema } from './TeamWorkOverrideCreateManyTeamWorkDayInputEnvelopeSchema';
import { TeamWorkOverrideWhereUniqueInputSchema } from './TeamWorkOverrideWhereUniqueInputSchema';
import { TeamWorkOverrideUpdateWithWhereUniqueWithoutTeamWorkDayInputSchema } from './TeamWorkOverrideUpdateWithWhereUniqueWithoutTeamWorkDayInputSchema';
import { TeamWorkOverrideUpdateManyWithWhereWithoutTeamWorkDayInputSchema } from './TeamWorkOverrideUpdateManyWithWhereWithoutTeamWorkDayInputSchema';
import { TeamWorkOverrideScalarWhereInputSchema } from './TeamWorkOverrideScalarWhereInputSchema';

export const TeamWorkOverrideUncheckedUpdateManyWithoutTeamWorkDayNestedInputSchema: z.ZodType<Prisma.TeamWorkOverrideUncheckedUpdateManyWithoutTeamWorkDayNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => TeamWorkOverrideCreateWithoutTeamWorkDayInputSchema), z.lazy(() => TeamWorkOverrideCreateWithoutTeamWorkDayInputSchema).array(), z.lazy(() => TeamWorkOverrideUncheckedCreateWithoutTeamWorkDayInputSchema), z.lazy(() => TeamWorkOverrideUncheckedCreateWithoutTeamWorkDayInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TeamWorkOverrideCreateOrConnectWithoutTeamWorkDayInputSchema), z.lazy(() => TeamWorkOverrideCreateOrConnectWithoutTeamWorkDayInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TeamWorkOverrideUpsertWithWhereUniqueWithoutTeamWorkDayInputSchema), z.lazy(() => TeamWorkOverrideUpsertWithWhereUniqueWithoutTeamWorkDayInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TeamWorkOverrideCreateManyTeamWorkDayInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TeamWorkOverrideWhereUniqueInputSchema), z.lazy(() => TeamWorkOverrideWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TeamWorkOverrideWhereUniqueInputSchema), z.lazy(() => TeamWorkOverrideWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TeamWorkOverrideWhereUniqueInputSchema), z.lazy(() => TeamWorkOverrideWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TeamWorkOverrideWhereUniqueInputSchema), z.lazy(() => TeamWorkOverrideWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TeamWorkOverrideUpdateWithWhereUniqueWithoutTeamWorkDayInputSchema), z.lazy(() => TeamWorkOverrideUpdateWithWhereUniqueWithoutTeamWorkDayInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TeamWorkOverrideUpdateManyWithWhereWithoutTeamWorkDayInputSchema), z.lazy(() => TeamWorkOverrideUpdateManyWithWhereWithoutTeamWorkDayInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TeamWorkOverrideScalarWhereInputSchema), z.lazy(() => TeamWorkOverrideScalarWhereInputSchema).array() ]).optional(),
});

export default TeamWorkOverrideUncheckedUpdateManyWithoutTeamWorkDayNestedInputSchema;
