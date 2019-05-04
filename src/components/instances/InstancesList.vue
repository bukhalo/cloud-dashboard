<script>
import { mapActions, mapState } from "vuex";

export default {
  methods: {
    ...mapActions({
      instanceDestroy: "instances/destroy"
    })
  },
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
              <th></th>
            </tr>
          </thead>
        </table>
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
                  <small class="text-muted">- {{ instance.image }}</small>
                </div>
              </router-link>
              <div></div>
            </td>
            <td>
              <div v-for="(ip, key) in instance.ipAddresses" :key="key">{{ ip.ip }}</div>
            </td>
            <td>{{ instance.created }}</td>
            <td>
              <i
                class="fa fa-circle text-xs m-t-sm"
                :class="{ 'text-success': instance.status === 'ACTIVE' }"
              ></i>
            </td>
            <td>
              <p>
                <button class="btn m-b-xs btn-sm btn-info btn-addon">
                  <i class="fa fa-trash-o"></i>Редактировать
                </button>
                <button
                  class="btn btn-sm btn-danger"
                  @click="instanceDestroy({ instanceId: instance.id })"
                >
                  <i class="fa fa-trash-o"></i> Удалить
                </button>
              </p>
            </td>
          </tr>
        </tbody>
      </div>
    </div>
  </div>
</template>
