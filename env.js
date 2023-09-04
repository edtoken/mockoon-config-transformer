import dotenv from 'dotenv';
import * as fs from 'fs';

if (fs.existsSync('./.env.local')) {
  dotenv.config({ path: './.env.local' });
}

dotenv.config({ path: './.env' });
