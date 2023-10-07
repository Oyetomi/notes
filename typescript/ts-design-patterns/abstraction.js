"use strict";
class SitesAPIClient {
    getAll() {
        const res = [{ name: "website1" }];
        return Promise.resolve(res);
    }
    getOne(id) {
        return Promise.resolve({ name: "website1" });
    }
}
