"use strict";
class MySqlDatabase {
    save(data) {
        console.log(`${data} is being saved by MySQL`);
    }
}
class MongoDBDatabase {
    save(data) {
        console.log(`${data} is being saved to mongoDB`);
    }
}
class HighLevelModule {
    constructor(database) {
        this.database = database;
    }
    execute(data) {
        this.database.save(data);
    }
}
let mongoDB = new MongoDBDatabase();
let sqlDB = new MySqlDatabase();
const initMongo = new HighLevelModule(mongoDB);
const initSql = new HighLevelModule(sqlDB);
initMongo.execute("data");
initSql.execute("new post");
