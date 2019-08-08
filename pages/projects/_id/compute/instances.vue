<script>
import gql from 'graphql-tag'

export default {
  data: () => ({
    columns: [
      {
        dataIndex: 'id',
        key: 'id',
        slots: { title: 'customTitle' },
        scopedSlots: { customRender: 'name' }
      },
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age'
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address'
      },
      {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        scopedSlots: { customRender: 'tags' }
      },
      {
        title: 'Action',
        key: 'action',
        scopedSlots: { customRender: 'action' }
      }
    ]
  }),
  apollo: {
    instanceCollection: gql`
      {
        instanceCollection(projectId: "f9d9ae14e68e4f53bad2ca852ed87d70") {
          id
          flavorId
        }
      }
    `
  }
}
</script>

<template>
    <div>
        <a-table :columns="columns" :dataSource="instanceCollection">
            <a slot="id" slot-scope="id" href="javascript:;">{{id}}</a>
            <span slot="customTitle"><a-icon type="smile-o" /> Name</span>
            <span slot="tags" slot-scope="tags">
      <a-tag v-for="tag in tags" color="blue" :key="tag">{{tag}}</a-tag>
    </span>
            <span slot="action" slot-scope="text, record">
      <a href="javascript:;">Invite 一 {{record.name}}</a>
      <a-divider type="vertical" />
      <a href="javascript:;">Delete</a>
      <a-divider type="vertical" />
      <a href="javascript:;" class="ant-dropdown-link">
        More actions <a-icon type="down" />
      </a>
    </span>
        </a-table>
        <div v-for="(instance, key) in instanceCollection" v-bind:key="key">{{ instance }}</div>
    </div>
</template>
