<template>
  <div>
    <h2>Hello post page</h2>
    <Header />
    <PostContent />
  </div>
</template>
<script>
import Header from '@/components/posts/Header'
import PostContent from '@/components/posts/PostContent'
export default {
  layout: 'coreLayout',
  components: { Header, PostContent },
}
</script>
