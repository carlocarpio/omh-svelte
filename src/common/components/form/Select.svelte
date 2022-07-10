<script lang="ts">
  import { Countries } from '../../../lib/countries'

  export let field: any
  console.log(field, `field`)
</script>

<select
  class="select select-bordered border-2 h-[60px]  w-full outline-0 focus:outline-0 hover:border-orange-ohmyhome"
  id={field.name}
  name={field.name}
  value={field.value}
  on:input={field.handleInput}
>
  {#each Countries as country}
    <option value={country?.code}>
      +{country.phone}
    </option>
  {/each}
  <!-- <option disabled selected>Who shot first?</option>
  <option>Han Solo</option>
  <option>Greedo</option> -->
</select>
