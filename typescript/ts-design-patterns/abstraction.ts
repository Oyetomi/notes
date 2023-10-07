interface RestApiClient<T> {
  getAll(): Promise<T[]>;

  getOne(id: string): Promise<T>;
}

interface Site {
  name: string;
}

class SitesAPIClient implements RestApiClient<Site> {
  getAll() {
    const res: Site[] = [{ name: "website1" }];
    return Promise.resolve(res);
  }

  getOne(id: string) {
    return Promise.resolve({ name: "website1" });
  }
}
