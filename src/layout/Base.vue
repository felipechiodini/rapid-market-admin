<template>
    <div>
  <base-header />
  <RouterView />
        
    </div>
</template>

<script>
import BaseHeader from '@/components/BaseHeader.vue';
export default {

    components: {
    BaseHeader

    }
    
}
</script>