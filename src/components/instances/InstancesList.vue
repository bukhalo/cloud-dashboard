<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      instances: state => state.instances.instances
    })
  },
  mounted() {
    console.log(this.instances);
  }
};
</script>

<template>
  <div class="row">
    <div class="col-sm-12">
      <div class="panel panel-default">
        <table class="table table-striped m-b-none">
          <thead>
            <tr>
              <th>Имя</th>
              <th>IP адреса</th>
              <th>Создан</th>
              <th>Статус</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(instance, key) in instances" :key="key">
              <td>
                <router-link :to="`/instance/${instance.id}`">
                  <div>
                    <div class="h5 m-t-xs m-b-xs">{{ instance.name }}</div>
                    <small>
                      {{ instance.flavor.vcpus }} CPU /
                      {{ instance.flavor.ram / 1000 }} GB RAM /
                      {{ instance.flavor.disk }} GB Disk / {{ instance.region }}
                    </small>
                    <small class="text-muted"
                      >- {{ instance.image.name }}</small
                    >
                  </div>
                </router-link>
                <div></div>
              </td>
              <td>
                <div v-for="(ip, key) in instance.ipAddresses" :key="key">
                  {{ ip.ip }}
                </div>
              </td>
              <td>{{ instance.created }}</td>
              <td>
                <i
                  class="fa fa-circle text-xs m-t-sm"
                  :class="{ 'text-success': instance.status === 'ACTIVE' }"
                ></i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
