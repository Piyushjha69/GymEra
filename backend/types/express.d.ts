import type { PrismaClient } from "@prisma/client/extension";

declare global {
    namespace Express {
        interface Request{
            db?: PrismaClient;
            user?: TokenPayload;
        }
    }
}