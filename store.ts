
interface Product {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
  tags: string[];
}

interface Store {
  storeName: string;
  products: Product[];
}

const store: Store = {
  storeName: "My Online Store",
  products: [
    {
      id: 1,
      name: "Wireless Mouse",
      price: 80,
      inStock: true,
      tags: ["electronics", "mouse", "wireless"],
    },
    {
      id: 2,
      name: "Mechanical Keyboard",
      price: 250,
      inStock: false,
      tags: ["electronics", "keyboard", "gaming"],
    },
    {
      id: 3,
      name: "USB-C Cable",
      price: 40,
      inStock: true,
      tags: ["electronics", "cable", "accessories"],
    },
    {
      id: 4,
      name: "Notebook",
      price: 20,
      inStock: true,
      tags: ["stationery", "paper", "office"],
    },
    {
      id: 5,
      name: "Gaming Headset",
      price: 300,
      inStock: true,
      tags: ["electronics", "gaming", "audio"],
    },
  ],
};

const cart = [1, 3, 5];

function getAvailableProducts(store : Store) : Product[] {
  return store.products.filter((product)=>product.inStock);
}

function getProductsInPriceRange(store : Store, minPrice : number ,maxPrice : number ) : Product[] {
  return store.products.filter((product)=> product.price>=minPrice && product.price<=maxPrice);
}

function getProductsByTag(store : Store ,tag : string) : Product[]{
  return store.products.filter((prod)=>prod.tags.includes(tag));
}

function getAvailableProductsByTag(store : Store, tag : string) : Product[] {
  const prodByTag : Product[] = getProductsByTag(store, tag);
  return prodByTag.filter((product) => product.inStock);
}

function getCartProducts(store : Store , cart : number[] ) : Product[] {
  return store.products.filter((product) => cart.includes(product.id));
}

function getCartTotalInStock(store : Store ,cart : number[]) : number{
  const productsToSum : Product[] = store.products.filter((product) => cart.includes(product.id) && product.inStock === true);
  let sum = 0;
  productsToSum.forEach((product) => {
    sum+=product.price;
  })
  return sum;
}

