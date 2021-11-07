<template>
  <div class="min-h-full">
    <Menu />
    <main>
      <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <!-- Replace with your content -->
        <div class="px-4 py-6 sm:px-0">
          <div class="border-gray-200 rounded-lg h-96">
            <router-view />
          </div>
        </div>
        <!-- /End replace -->
      </div>
    </main>
    
  </div>
  
</template>
<script>

import Menu from './components/UI/Menu'
export default {
  components: {
    Menu
  }
}
</script>