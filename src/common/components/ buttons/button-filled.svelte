<script lang="ts">
  export let label: string
  export let type: string
  export let onClick: () => void
  export let disabled: boolean
  export let submitting: boolean
</script>

<button
  on:click={onClick}
  {type}
  disabled={disabled}
  class="h-[50px] w-full rounded-md bg-orange-ohmyhome text-white text-bold text-lg focus:outline-0 hover:bg-orange-500"
>
  {submitting ? "...Submitting" : label}
</button>
