interface Customer {
  giveDiscount(): number;
}

class RegularCustomer implements Customer {
  giveDiscount(): number {
    return 10;
  }
}

class PremiumCustomer implements Customer {
  giveDiscount(): number {
    return 20;
  }
}

class GoldCustomer implements Customer {
  giveDiscount(): number {
    return 30;
  }
}

class Discount {
  giveDiscount(customer: Customer): number {
    return customer.giveDiscount();
  }
}

let goldCustomer: GoldCustomer = new GoldCustomer();
let discount: Discount = new Discount();
console.log(discount.giveDiscount(goldCustomer));
