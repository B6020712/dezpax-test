<template>
    <main class="py-4">
        <h3>Products Detail</h3>
        <div class="card">
            <div class="card-header"><button type="button" class="btn btn-outline-secondary btn-sm m-2" @click="$router.back()"><i class="bi bi-arrow-left"></i></button> {{ product.product_name }}</div>
            <div class="row g-0">
                <div class="col-12 col-md-6 col-lg-4 d-flex">
                    <img class="card-img-top object-fit-contain justify-content-center align-items-middle p-2" style="max-width: 500px; max-height: 450px;" :src=product.product_url :alt=product.sku>
                </div>
                <div class="col-12 col-md-6 col-lg-8">
                    <div class="card-body px-2">
                        <div class="card-text py-2">
                            <div class="p-2 mt-2 border"><span class="pe-2 border-end">SKU</span> <span class="pe-2">{{ product.sku }}</span></div>
                            <div class="p-2 mt-2 border"><span class="pe-2 border-end">Name</span> <span class="ps-2">{{ product.product_name }}</span></div>
                            <div class="p-2 mt-2 border"><span class="pe-2 border-end">Price</span> <span class="ps-2">{{ product.product_price }} THB</span></div>
                            <div class="p-2 mt-2 border"><span class="pe-2 border-end">Size</span> <span class="ps-2 text-uppercase">{{ product.product_size }}</span></div>
                            <div class="p-2 mt-2 border"><span class="pe-2 border-end">Weight</span> <span class="ps-2">{{ product.product_weight }} Kg</span></div>
                            <div class="p-2 mt-2 border" v-for="(item, index) in product.product_detial" :key="index"><span class="pe-2 border-end">{{ index }}</span> <span class="ps-2">{{ item }}</span></div>
                        </div>
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
            product: []
        }
    },
    mounted() {
        this.fetchData()
    },
    methods: {
        fetchData: async function () {
            const base_url = this.$config.public.BASEURL
            const backend_port = this.$config.public.BACKEND_PORT
            const getProduct = await $fetch(`http://${base_url}:${backend_port}/stores/${this.$route.params.id}`)
            this.product = getProduct.product[0]
        }
    },
}
</script>