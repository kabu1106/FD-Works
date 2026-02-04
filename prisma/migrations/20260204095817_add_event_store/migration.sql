-- CreateTable
CREATE TABLE "EventStore" (
    "id" TEXT NOT NULL,
    "aggregateId" TEXT NOT NULL,
    "aggregateType" TEXT NOT NULL,
    "aggregateVersion" INTEGER NOT NULL,
    "eventType" TEXT NOT NULL,
    "payload" JSONB NOT NULL,
    "occurredAt" TIMESTAMP(3) NOT NULL,
    "causedBy" TEXT NOT NULL,
    "schemaVersion" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "EventStore_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "EventStore_aggregateId_idx" ON "EventStore"("aggregateId");

-- CreateIndex
CREATE INDEX "EventStore_aggregateType_idx" ON "EventStore"("aggregateType");

-- CreateIndex
CREATE INDEX "EventStore_eventType_idx" ON "EventStore"("eventType");

-- CreateIndex
CREATE INDEX "EventStore_occurredAt_idx" ON "EventStore"("occurredAt");

-- CreateIndex
CREATE UNIQUE INDEX "EventStore_aggregateId_aggregateVersion_key" ON "EventStore"("aggregateId", "aggregateVersion");
