<script>
import _orderBy from "lodash/orderBy";
import _groupBy from "lodash/groupBy";
import { mapActions, mapState } from "vuex";

export default {
  beforeMount() {
    this.getImages();
  },
  methods: {
    ...mapActions({
      getImages: "images/get",
      instanceCreate: "instances/create"
    })
  },
  computed: {
    ...mapState({
      images: state => state.images.images,
      imagesByApps: state => {
        const active = state.images.images.filter(
          image => image.status === "active"
        );
        const filterBySBG = active.filter(
          image => image.region === "SBG3" && image.tags.length > 0
        );
        const ordered = _orderBy(filterBySBG, ["name", "asc"]);
        return ordered;
      },
      imagesByGroup: state => {
        const active = state.images.images.filter(
          image => image.status === "active"
        );
        const filterBySBG = active.filter(
          image => image.region === "SBG3" && image.tags.length === 0
        );
        const ordered = _orderBy(filterBySBG, ["name", "asc"]);
        return ordered;
      }
    })
  }
};
</script>

<template>
  <div class="panel wrapper">
    <h3 class="font-thin m-t-none m-b-none">Выберите образ</h3>
    <br />
    <div class="row">
      <div class="tab-container wrapper">
        <ul class="nav nav-tabs" role="tablist">
          <li role="distributives" class="active">
            <a
              href="#distributives"
              aria-controls="distributives"
              role="tab"
              data-toggle="tab"
              >Дистрибутивы</a
            >
          </li>
          <li role="apps">
            <a href="#apps" aria-controls="apps" role="tab" data-toggle="tab"
              >Приложения</a
            >
          </li>
        </ul>
        <div class="tab-content">
          <div role="tabpanel" class="tab-pane active" id="distributives">
            <div class="row">
              <div
                class="col-sm-3"
                v-for="(image, key) in imagesByGroup"
                :key="key"
              >
                <div class="panel b-a">
                  <div class="panel-heading no-border text-center">
                    <span>{{ image.name }}</span>
                  </div>
                  <div class="tags">
                    <label
                      v-for="tag in image.tags"
                      class="label bg-success m-l-xs"
                      >{{ tag }}</label
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div role="tabpanel" class="tab-pane" id="apps">
            <div class="row">
              <div
                class="col-sm-3"
                v-for="(image, key) in imagesByApps"
                :key="key"
              >
                <div class="panel b-a">
                  <div class="panel-heading no-border text-center">
                    <span>{{ image.name }}</span>
                  </div>
                  <div class="tags">
                    <label
                      v-for="tag in image.tags"
                      class="label bg-success m-l-xs"
                      >{{ tag }}</label
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <h3 class="font-thin m-t-none m-b-none">Тариф</h3>
    <br />
    <h3 class="font-thin m-t-none m-b-none">Создать</h3>
    <br />
    <div class="form-group">
      <label>Выберите имя для инстанса</label>
      <input
        type="email"
        class="form-control"
        placeholder="Название инстанса"
      />
    </div>
    <button
      @click="instanceCreate()"
      class="btn m-b-xs btn-sm btn-success btn-addon"
    >
      <i class="fa fa-plus"></i>Создать
    </button>
  </div>
</template>
