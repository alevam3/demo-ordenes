<script>
import AddItem from "@/components/AddItem.vue";
import { Modal } from 'bootstrap'

export default {
    emits: ["close"],
    props: {
        order: { required: true, type: Object }
    },
    data(){
        return {
            modalInstance: null,
            adding: false
        }
    },
    methods: {
        showFormAdd(){
            const vm = this;
            const elModal = document.getElementById('FormAddModal');
            vm.adding = true;
            
            elModal.addEventListener('hidden.bs.modal', event => {
                vm.adding = false;
            })

            vm.modalInstance = new Modal(elModal, {backdrop: 'static'});
            this.modalInstance.show();
        },
        addProducto(newItem){
            this.order.items.push(newItem);
            this.modalInstance.hide();
        },
        removeItem(itemID){
            let index = this.order.items.findIndex(row => row.id == itemID);
            if(index >= 0){
                this.order.items.splice(index, 1);
            }
        }
    },
    computed: {
        Subtotal() {
            let subtotal = 0;
            this.order.items.forEach(item => {
                subtotal += parseFloat(item.price) * parseInt(item.quantity);
            });
            return subtotal.toFixed(2);
        }
    },
    components: { AddItem }
}

</script>

<template>
    <div class="row g-12">
        <div class="col-12">
            <h2 class="float-start">Órden {{ order.name }}</h2>
            <button type="button" class="btn-close float-end" aria-label="Close" @click="$emit('close')" title="Cerrar"></button>
        </div>
    </div>
    <div class="row g-12 mt-5">
        <div class="col-12">
            <button type="button" class="btn btn-outline-success float-start" @click="showFormAdd"><i class="bi bi-plus"></i> Agregar Producto</button>
            <button type="button" class="btn btn-primary float-end" data-bs-toggle="modal" data-bs-target="#paymentModal"><i class="bi bi-cash-coin"></i> Pagar</button>
        </div>
    </div>
    <div class="row g-12">
        <div class="table-responsive">
            <table class="table table-striped table-sm">
                <thead>
                    <tr>
                        <th scope="col" class="text-center">SKU</th>
                        <th scope="col" class="text-center">Nombre</th>
                        <th scope="col" class="text-center">Cantidad</th>
                        <th scope="col" class="text-center">Precio</th>
                        <th scope="col">&nbsp;</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in order.items" :key="item.id">
                        <td class="text-center">{{ item.sku }}</td>
                        <td class="text-center">{{ item.name }}</td>
                        <td class="text-center">{{ item.quantity }}</td>
                        <td class="text-center">$ {{ item.price }}</td>
                        <td class="text-center">
                            <button type="button" class="btn btn-sm btn-outline-danger" v-if="!item.id" @click="removeItem(item.id)">
                                <i class="bi bi-trash"></i>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" class="text-end fw-semibold">Subtotal:</td>
                        <td class="text-center fw-semibold">$ {{ Subtotal }}</td>
                        <td>&nbsp;</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    <!-- Modal Form Add -->
    <div class="modal fade" id="FormAddModal" tabindex="-1" aria-labelledby="FormAddModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <AddItem v-if="adding" @insert="addProducto" />
        </div>
    </div>


    <!-- Modal Pago -->
    <div class="modal fade" id="paymentModal" tabindex="-1" aria-labelledby="paymentModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="paymentModalLabel">Confirmación de Pago</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="alert fw-semibold text-success" role="alert">
                    El pago se realizó correctamente!!!
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-success" data-bs-dismiss="modal">Continuar</button>
            </div>
            </div>
        </div>
    </div>
</template>