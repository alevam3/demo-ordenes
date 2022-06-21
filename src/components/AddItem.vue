
<script>

export default{
    emits: ["insert"],
    data() {
        return {
            item: {
                sku: '',
                name: '',
                quantity: '',
                price: ''
            },
            validated: false
        }
    },
    methods: {
        saveItem(){
            this.$emit('insert', this.item);
        }
    },
    mounted(){
        const vm = this;
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        const forms = document.querySelectorAll('.needs-validation')

        // Loop over them and prevent submission
        Array.from(forms).forEach(form => {
            form.addEventListener('submit', event => {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }else{
                    vm.saveItem();
                }

                form.classList.add('was-validated')
            }, false)
        })
    }
}

</script>

<template>
    <form class="needs-validation" novalidate @submit.prevent="" autocomplete="off">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="FormAddModalLabel">Agregando Producto</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="row mb-3">
                    <label for="inputSku" class="col-sm-2 col-form-label">SKU:</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" id="inputSku" v-model="item.sku" required>
                        <div class="invalid-feedback">SKU requerido</div>
                    </div>
                </div>
                <div class="row mb-3">
                    <label for="inputName" class="col-sm-2 col-form-label">Nombre:</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" id="inputName" v-model="item.name" required>
                        <div class="invalid-feedback">Nombre requerido</div>
                    </div>
                </div>
                <div class="row mb-3">
                    <label for="inputQuantity" class="col-sm-2 col-form-label">Cantidad:</label>
                    <div class="col-sm-10">
                        <input type="number" class="form-control" id="inputQuantity" v-model="item.quantity" required>
                        <div class="invalid-feedback">Cantidad requerida</div>
                    </div>
                </div>
                <div class="row mb-3">
                    <label for="inputPrice" class="col-sm-2 col-form-label">Precio:</label>
                    <div class="col-sm-10">
                        <input type="number" class="form-control" id="inputPrice" v-model="item.price" required>
                        <div class="invalid-feedback">Precio requerido</div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="submit" class="btn btn-primary">Agregar</button>
            </div>
        </div>
    </form>

</template>