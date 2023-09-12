interface IDatabase {
  save(data: string): void;
}

class MySqlDatabase implements IDatabase {
  save(data: string): void {
    console.log(`${data} is being saved by MySQL`);
  }
}

class MongoDBDatabase implements IDatabase {
  save(data: string): void {
    console.log(`${data} is being saved to mongoDB`);
  }
}

class HighLevelModule {
  constructor(private database: IDatabase) {}

  execute(data: string) {
    this.database.save(data);
  }
}

let mongoDB = new MongoDBDatabase();
let sqlDB = new MySqlDatabase();
const initMongo = new HighLevelModule(mongoDB);
const initSql = new HighLevelModule(sqlDB);
initMongo.execute("data");
initSql.execute("new post");
