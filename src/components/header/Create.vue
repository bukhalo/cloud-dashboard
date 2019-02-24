<script>
export default {};
</script>

<template>
  <li class="dropdown">
    <a href="#" data-toggle="dropdown" class="dropdown-toggle">
      <i class="fa fa-fw fa-plus visible-xs-inline-block"></i>
      <span translate="header.navbar.new.NEW">Создать</span>
      <span class="caret"></span>
    </a>
    <ul class="dropdown-menu" role="menu">
      <li>
        <router-link to="/create/instance" translate="header.navbar.new.PROJECT"
          >Инстанс
          <br />
          <small class="text-muted">Создать новый облачный сервер</small>
        </router-link>
      </li>
    </ul>
  </li>
</template>
