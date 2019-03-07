<script>
import packageJson from '../../package.json'

export default {
  data: () => ({
    appName: packageJson.name,
    appVersion: packageJson.version
  })
}
</script>


<template>
  <footer id="footer" class="app-footer" role="footer">
    <div class="wrapper b-t bg-light">
      <span class="pull-right">
        {{ appVersion }}
        <a href ui-scroll="app" class="m-l-sm text-muted">
          <i class="fa fa-long-arrow-up" />
        </a>
      </span>
      &copy; 2019 {{ appName }}, LLC. All rights reserved. Proudly made in Moscow.
    </div>
  </footer>
</template>
