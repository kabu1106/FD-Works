import { PrismaClient } from "@prisma/client";
import { ProjectionWorker } from "@/projections/shared/ProjectionWorker";
import { ProjectionRegistry } from "@/projections/shared/ProjectionRegistry";

import { AttendanceProjector } from "@/projections/attendance/attendanceProjector";
import { DutyProjector } from "@/projections/duty/DutyProjector";
import { IncidentProjector } from "@/projections/incident/IncidentProjector";

const prisma = new PrismaClient();

async function main() {

  const registry = new ProjectionRegistry();

  registry.register(new AttendanceProjector(prisma));
  registry.register(new DutyProjector(prisma));
  registry.register(new IncidentProjector(prisma));

  const worker = new ProjectionWorker(
    prisma,
    registry.getAll(),
    100
  );

  while (true) {

    await worker.runOnce();

    await new Promise((r) => setTimeout(r, 500));

  }
}

main();