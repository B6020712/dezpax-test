<template>
    <main class="py-4">
        <h3>Products</h3>
        <div class="pt-4 gx-4 gy-3 row row-cols-1 row-cols-md-2 row-cols-lg-3">
            <div class="col" v-for="(item, index) in products" :key="index">
                <div class="card" style="height: 600px;">
                    <img class="card-img-top object-fit-contain" style="height: 450px;" :src=item.product_url :alt=item.sku>
                    <div class="card-body">
                        <div class="card-title">{{ item.product_name }}</div>
                        <div class="card-text">{{ item.product_price }} THB</div>
                        <NuxtLink :to="{ name: 'detail-id', params: { id: item.sku } }" class="btn btn-outline-info mt-4 text-decoration-none"><i class="bi bi-card-list"></i> Product Detail</NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    data() {
        return {
            products: []
        }
    },
    mounted() {
        this.fetchData()
    },
    methods: {
        fetchData: async function () {
            const base_url = this.$config.public.BASEURL
            const backend_port = this.$config.public.BACKEND_PORT
            const getProducts = await $fetch(`http://${base_url}:${backend_port}/stores`)
            this.products = getProducts.products
        }
    },
}
</script>