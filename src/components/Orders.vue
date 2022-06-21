<script>

export default {
    emits: ['show'],
    data() {
        return {
            loading: true,
            orders: []
        }
    },
    methods: {
        getOrders(){
            var vm = this;
            fetch(
                'https://eshop-deve.herokuapp.com/api/v2/orders', 
                {
                    headers: {
                        'Authorization': 'Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJwUGFINU55VXRxTUkzMDZtajdZVHdHV3JIZE81cWxmaCIsImlhdCI6MTYyMDY2Mjk4NjIwM30.lhfzSXW9_TC67SdDKyDbMOYiYsKuSk6bG6XDE1wz2OL4Tq0Og9NbLMhb0LUtmrgzfWiTrqAFfnPldd8QzWvgVQ',
                        'Content-Type': 'application/json'
                    }
                }
            )
            .then(response => response.json())
            .then(data => {
                if(data.success){
                    vm.orders = data.orders;
                }
                vm.loading = false;
            });
        }
    },
    mounted(){
        this.getOrders();
    }
}

</script>

<template>
    <h2 class="row g-12">Órdenes</h2>
    <div class="row g-12 mt-5" v-show="!loading">
        <div class="table-responsive">
            <table class="table table-striped table-sm">
                <thead>
                    <tr>
                        <th scope="col" class="text-center"># Órden</th>
                        <th scope="col" class="text-center">Total</th>
                        <th scope="col" class="text-center">Fecha Creación</th>
                        <th scope="col" class="text-center">Estatus</th>
                        <th scope="col">&nbsp;</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="order in orders" :key="order.number">
                        <td class="text-center">{{ order.number }}</td>
                        <td class="text-center">$ {{ order.totals.total }}</td>
                        <td class="text-center">{{ $filters.dateFormat(order.dates.createdAt) }}</td>
                        <td class="text-center">
                            <span v-if="order.payment.status == 'paid'" class="text-success">Pagado</span>
                            <span v-else class="text-success">{{ order.payment.status }}</span>
                        </td>
                        <td class="text-center">
                            <button type="button" class="btn btn-primary btn-sm" title="Ver productos" @click="$emit('show', order)">
                                <i class="bi bi-list-ul"></i>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="d-flex justify-content-center align-items-center mt-5 text-secondary" v-if="loading">
        <div class="spinner-border me-4" role="status" aria-hidden="true"></div>
        <strong>Obteniendo órdenes ...</strong>
    </div>
</template>