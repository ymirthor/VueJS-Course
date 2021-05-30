<template>
  <div class="row">
    <div class="col-sm-12">
      <h3>Quotes Added</h3>
      <div class="progress">
        <div
          class="progress-bar"
          :style="{ width: progress * (100 / capacity) + '%' }"
        >
          <template v-if="progress !== 0">
            {{ progress }} / {{ capacity }}
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    progress: {
      type: Number,
      default: 0,
    },
    capacity: {
      type: Number,
      default: 10,
    },
  },
};
</script>