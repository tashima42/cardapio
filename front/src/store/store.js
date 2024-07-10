import PocketBase from 'pocketbase';

const pb = new PocketBase('http://umbrel.local:8456');

// fetch a paginated records list
const getProducts = async () => await pb.collection('products').getFullList({ sort: '-created', filter: "available=true" });

const createOrder = async (name, number, product) => await pb.collection('orders').create({ name, number, product })

export default {
    getProducts,
    createOrder,
}

