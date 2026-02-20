/*
  Warnings:

  - You are about to drop the `EventStore` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "EventStore";

-- CreateTable
CREATE TABLE "event_store" (
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

    CONSTRAINT "event_store_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "event_store_aggregateId_idx" ON "event_store"("aggregateId");

-- CreateIndex
CREATE INDEX "event_store_aggregateType_idx" ON "event_store"("aggregateType");

-- CreateIndex
CREATE INDEX "event_store_eventType_idx" ON "event_store"("eventType");

-- CreateIndex
CREATE INDEX "event_store_occurredAt_idx" ON "event_store"("occurredAt");

-- CreateIndex
CREATE UNIQUE INDEX "event_store_aggregateId_aggregateVersion_key" ON "event_store"("aggregateId", "aggregateVersion");
