import { config } from 'dotenv';

config();


export const {
  NODE_ENV,
  PORT,
  GRAPH_BASE_URL

} = process.env;
