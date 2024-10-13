DROP INDEX IF EXISTS "name_idx";--> statement-breakpoint
ALTER TABLE "expenses" ADD COLUMN "created_at" timestamp DEFAULT now();--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "user_id_idx" ON "expenses" USING btree ("user_id");