<template>
    <v-container width="1000">
        <v-checkbox
            v-model="showOutOfStock"
            label="Show out of Stock"
        ></v-checkbox>
        <v-row>
            <v-col
                v-for="product in inStockProducts"
                :key="product.id"
                cols="4"
            >
                <v-card>
                    <v-card-title>{{ product.name }}</v-card-title>
                    <v-card-text>
                        <div>{{ product.price }}</div>
                        <div v-if="product.inStock">In stock</div>
                        <div v-else>Out of stock</div>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            products: [
                {
                    id: 1,
                    name: "Cool T-Shirt",
                    price: "$19.99",
                    inStock: true,
                },
                {
                    id: 2,
                    name: "Stylish Sunglasses",
                    price: "$29.99",
                    inStock: false,
                },
                {
                    id: 3,
                    name: "Comfortable Jeans",
                    price: "$49.99",
                    inStock: true,
                },
                {
                    id: 4,
                    name: "Running Shoes",
                    price: "$79.99",
                    inStock: true,
                },
                {
                    id: 5,
                    name: "Leather Wallet",
                    price: "$39.99",
                    inStock: false,
                },
            ],
            showOutOfStock: false,
        };
    },
    computed: {
        inStockProducts() {
            if (this.showOutOfStock) {
                return this.products;
            } else {
                return this.products.filter((product) => product.inStock);
            }
        },
    },
};
</script>
