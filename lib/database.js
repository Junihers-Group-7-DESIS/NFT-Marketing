import { MongoClient } from 'mongodb';


global.mongo = global.mongo || {};


export async function getMongoClient() {
    if (!global.mongo.client) {
      global.mongo.client = new MongoClient(process.env.MONGODB_URI);
    }
    await global.mongo.client.connect();
    return global.mongo.client;
  }

export default async function database(req, res, next) {
    if (!global.mongo.client) {
      global.mongo.client = new MongoClient(process.env.MONGODB_URI);
    }
    req.dbClient = await getMongoClient();
    req.db = req.dbClient.db(); // this use the database specified in the MONGODB_URI (after the "/")
    return next();
  }