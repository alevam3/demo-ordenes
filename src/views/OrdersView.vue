<script>
import Orders from '@/components/Orders.vue'
import OrderDetail from '@/components/OrderDetail.vue'

export default {
  components: {
    Orders, OrderDetail
  },
  data() {
    return {
        section: 'list',
        order: null
    }
  },
  methods: {
    showOrder(order) {
      this.order = order;
      this.section = 'detail';
    },
    closeOrder(){
      this.order = null;
      this.section = 'list';
    }
  },
}
</script>

<template>
  <main class="col-md-12 ms-sm-auto col-lg-12 px-md-12 p-2" style="margin-top: 15px;">
    <KeepAlive>
      <Orders v-if="section == 'list'" @show="showOrder" />
      <OrderDetail v-else-if="section == 'detail'" :order="order" @close="closeOrder" />
    </KeepAlive>
  </main>
</template>
