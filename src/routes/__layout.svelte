<script>
  import { QueryClient, QueryClientProvider } from '@sveltestack/svelte-query'
  import '../app.css'
  const queryClient = new QueryClient()
</script>

<QueryClientProvider client={queryClient}>
  <slot />
</QueryClientProvider>
