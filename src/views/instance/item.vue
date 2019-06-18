<script>
export default {};
</script>

<template>
  <div>
    <h2>User {{ $route.params.id }}</h2>
    <div class="panel hbox hbox-auto-xs no-border">
      <div class="col wrapper">
        <i class="fa fa-circle-o text-info m-r-sm pull-right"></i>
        <h4 class="font-thin m-t-none m-b-none text-primary-lt">
          Managed Services
        </h4>
        <span class="m-b block text-sm text-muted"
          >Service report of this year (updated 1 hour ago)</span
        >
        <div
          ui-jq="plot"
          ui-options="[
              { data: [[0,49.01],[1,47.45],[2,48.81],[3,51.49],[4,49.81],[5,48.92],[6,48.65],[7,45.81],[8,49.77],[9,48.44],[10,43.97],[11,42.72],[12,40.83],[13,35.98],[14,37.82],[15,42.74],[16,42.87],[17,39.57],[18,44.25],[19,47.81],[20,51.06],[21,47.52],[22,49.83],[23,48.35],[24,47.23],[25,49],[26,49.59],[27,51.16],[28,49.23],[29,50.7],[30,46.82],[31,49.67],[32,46.97],[33,51.69],[34,54.37],[35,55.27],[36,59.92],[37,63.04],[38,65.12],[39,69.16],[40,66.45],[41,70.7],[42,74.23],[43,72.88],[44,75.53],[45,78.89],[46,81.56],[47,82.42],[48,85.32],[49,85.72],[50,88.85],[51,92.29],[52,87.32],[53,82.65],[54,83.83],[55,78.89],[56,78.68],[57,75.76],[58,73.5],[59,69.14],[60,64.87],[61,65.27],[62,69],[63,72.84],[64,75.51],[65,79.65],[66,81.03],[67,82.55],[68,82.35],[69,82.64],[70,86.1],[71,85.6],[72,87.48],[73,89.85],[74,93.03],[75,89.06],[76,88.56],[77,84.71],[78,85.18],[79,80.29],[80,81.14],[81,80.75],[82,83.6],[83,85.61],[84,84.48],[85,82.85],[86,85.16],[87,86.33],[88,86.2],[89,86.44],[90,85.22],[91,89.14],[92,91.26],[93,95.96],[94,98.82],[95,97.46],[96,96.71],[97,97.06],[98,92.09],[99,88.67],[100,91.68],[101,91.39],[102,88.65],[103,90.03],[104,92.05],[105,92.6],[106,93.46],[107,93.72],[108,94.99],[109,96.37],[110,96.48],[111,94.98],[112,94.16],[113,98.11],[114,100],[115,96.79],[116,95.99],[117,95.04],[118,95.72],[119,95.52],[120,92.31],[121,91.97],[122,91.97],[123,93.36],[124,93.79],[125,92.95],[126,89.84],[127,92.99],[128,88.33],[129,83.78],[130,87.06],[131,82.23],[132,86.38],[133,81.87],[134,82.46],[135,81.78],[136,83.5],[137,82.68],[138,80.22],[139,83.77],[140,80.19],[141,76.46],[142,74.72],[143,71.94],[144,73.41],[145,71.98],[146,70.26],[147,66.25],[148,62.96],[149,66.59]], lines: { show: true, lineWidth: 1, fill:true, fillColor: { colors: [{opacity: 0.2}, {opacity: 0.8}] } } }
            ], 
            {
              colors: ['#e8eff0'],
              series: { shadowSize: 3 },
              xaxis:{ show:false },
              yaxis:{ font: { color: '#a1a7ac' } },
              grid: { hoverable: true, clickable: true, borderWidth: 0, color: '#dce5ec' },
              tooltip: true,
              tooltipOpts: { content: '%s of %x.1 is %y.4',  defaultTheme: false, shifts: { x: 10, y: -25 } }
            }"
          style="height: 240px; padding: 0px; position: relative;"
        >
          <canvas
            class="flot-base"
            width="980"
            height="480"
            style="direction: ltr; position: absolute; left: 0px; top: 0px; width: 490px; height: 240px;"
          ></canvas>
          <div
            class="flot-text"
            style="position: absolute; top: 0px; left: 0px; bottom: 0px; right: 0px; font-size: smaller; color: rgb(84, 84, 84);"
          >
            <div
              class="flot-y-axis flot-y1-axis yAxis y1Axis"
              style="position: absolute; top: 0px; left: 0px; bottom: 0px; right: 0px; display: block;"
            >
              <div
                style='position: absolute; top: 226px; font: 400 11px/13px "Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif; color: rgb(161, 167, 172); left: 11px; text-align: right;'
              >
                0
              </div>
              <div
                style='position: absolute; top: 188px; font: 400 11px/13px "Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif; color: rgb(161, 167, 172); left: 5px; text-align: right;'
              >
                20
              </div>
              <div
                style='position: absolute; top: 151px; font: 400 11px/13px "Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif; color: rgb(161, 167, 172); left: 5px; text-align: right;'
              >
                40
              </div>
              <div
                style='position: absolute; top: 114px; font: 400 11px/13px "Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif; color: rgb(161, 167, 172); left: 5px; text-align: right;'
              >
                60
              </div>
              <div
                style='position: absolute; top: 76px; font: 400 11px/13px "Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif; color: rgb(161, 167, 172); left: 5px; text-align: right;'
              >
                80
              </div>
              <div
                style='position: absolute; top: 39px; font: 400 11px/13px "Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif; color: rgb(161, 167, 172); left: 0px; text-align: right;'
              >
                100
              </div>
              <div
                style='position: absolute; top: 2px; font: 400 11px/13px "Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif; color: rgb(161, 167, 172); left: 0px; text-align: right;'
              >
                120
              </div>
            </div>
          </div>
          <canvas
            class="flot-overlay"
            width="980"
            height="480"
            style="direction: ltr; position: absolute; left: 0px; top: 0px; width: 490px; height: 240px;"
          ></canvas>
        </div>
      </div>
      <div class="col wrapper-lg w-lg bg-light dk r-r">
        <h4 class="font-thin m-t-none m-b">Reports</h4>
        <div class>
          <div class>
            <span class="pull-right text-primary">60%</span>
            <span>Consulting</span>
          </div>
          <div class="progress progress-xs m-t-sm bg-white">
            <div
              class="progress-bar bg-primary"
              data-toggle="tooltip"
              data-original-title="60%"
              style="width: 60%"
            ></div>
          </div>
          <div class>
            <span class="pull-right text-info">35%</span>
            <span>Online tutorials</span>
          </div>
          <div class="progress progress-xs m-t-sm bg-white">
            <div
              class="progress-bar bg-info"
              data-toggle="tooltip"
              data-original-title="35%"
              style="width: 35%"
            ></div>
          </div>
          <div class>
            <span class="pull-right text-warning">25%</span>
            <span>EDU management</span>
          </div>
          <div class="progress progress-xs m-t-sm bg-white">
            <div
              class="progress-bar bg-warning"
              data-toggle="tooltip"
              data-original-title="23%"
              style="width: 25%"
            ></div>
          </div>
        </div>
        <p class="text-muted">
          Dales nisi nec adipiscing elit. Morbi id neque quam. Aliquam
          sollicitudin venenatis
        </p>
      </div>
    </div>
  </div>
</template>
