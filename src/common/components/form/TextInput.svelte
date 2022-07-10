<script lang="ts">
  export let label: string
  export let hasError: boolean
  export let name: string
</script>

<div class="form-control w-full">
  <label
    class={`${
      hasError ? 'text-grapefruit-500' : ''
    } text-ink-400 font-light text-sm`}
    htmlfor={name}
  >
    {label}
  </label>
  <slot />
  <!-- <input
    {placeholder}
    type={type}
    id={name}
    name={name}
    bind:value={value}
    class={`${
      hasError ? `border-grapefruit-500` : ""
    } input input-bordered border-2 w-full h-[60px] outline-0 focus:outline-0 hover:border-orange-ohmyhome`}
  /> -->
</div>
