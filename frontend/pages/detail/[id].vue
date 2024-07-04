<template>
    <!-- <b-main padding="y-4">
        <b-h level="3"> Products Detail </b-h>
        <Card>
            <CardHeader><button type="button" class="btn btn-outline-secondary btn-sm" @click="$router.back()"><i class="bi bi-arrow-left"></i></button> {{ product.product_name }}</CardHeader>
            <CardImgTop display="block" margin="x-auto" padding="y-2" style="max-width: 500px; max-height: 700px;" :src=product.product_url :alt=product.sku />
            <CardBody padding="x-5">
                <CardTitle>SKU: {{ product.sku }}</CardTitle>
                <CardText padding="y-2"> 
                    <div><Badge background-color="primary">Name:</Badge> {{ product.product_name }}</div>
                    <div><Badge background-color="primary">Price:</Badge> {{ product.product_price }} Baht</div>
                    <div><Badge background-color="primary">Size:</Badge> <span class="text-uppercase">{{ product.product_size }}</span></div>
                    <div><Badge background-color="primary">Weight:</Badge> {{ product.product_weight }} Kg</div>
                    <div v-for="(item, index) in product.product_detial" :key="index"><Badge background-color="primary">{{ index }}:</Badge> {{ item }}</div>
                </CardText>
            </CardBody>
        </Card>
    </b-main> -->
    <main class="py-4">
        <h3>Products Detail</h3>
        <div class="card">
            <div class="card-header"><button type="button" class="btn btn-outline-secondary btn-sm m-2" @click="$router.back()"><i class="bi bi-arrow-left"></i></button> {{ product.product_name }}</div>
            <div class="row g-0">
                <div class="col-12 col-md-4">
                    <img class="card-img-top mx-auto py-2" style="max-width: 500px; max-height: 700px;" :src=product.product_url :alt=product.sku>
                </div>
                <div class="col-12 col-md-8">
                    <div class="card-body px-5">
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
            const getProduct = await $fetch(`http://localhost:8000/stores/${this.$route.params.id}`)
            this.product = getProduct.product[0]
        }
    },
}
</script>