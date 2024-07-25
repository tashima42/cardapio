import PocketBase from 'pocketbase';

const pb = new PocketBase('https://cardapio.tashimalab.uk');

// fetch a paginated records list
async function getProducts() {
  const list = await pb.collection('products').getFullList({expand: "items" });
  const products = list.map((product) => {
    return {
      id: product.id,
      name: product.name,
      price: product.price,
      highlight: product.highlight,
      description: product.description,
      items: product.expand.items.map((item, i) => {
        return {
          id: item.id,
          name: `#${i + 1}`,
          price: item.price,
          description: item.name,
        };
      }),
    };
  }
)
  return products
}

const createOrder = async (name, number, product) => await pb.collection('orders').create({ name, number, product })

export default {
    getProducts,
    createOrder,
}
