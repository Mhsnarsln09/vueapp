<template>
     <v-btn-toggle variant="outlined" divided style="height: 30px">
      <v-btn class="bg-error ma-0" size="x-small" @click.stop="onAdd('dec')">
        -
      </v-btn>
      <v-btn size="x-small" class="ma-0" @click.stop="">
        {{ count }}
      </v-btn>
      <v-btn class="bg-success ma-0" size="x-small" @click.stop="onAdd('inc')">
        +
      </v-btn>
    </v-btn-toggle>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    props:["count"],
    methods:{
        onAdd(value:string){
            this.$emit("onAdd", value)
        }
    }
    
})
</script>