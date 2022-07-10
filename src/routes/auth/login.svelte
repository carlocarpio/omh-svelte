<script lang="ts">
  interface FormValues {
    mobile: string
    password: string
    country: string
  }

  import { goto } from '$app/navigation'
  import { useMutation } from '@sveltestack/svelte-query'
  import { field,form } from 'svelte-forms'
  import { required } from 'svelte-forms/validators'

  import { loginUser } from '../../modules/Login/api/login'

  import ButtonFilled from '../../common/components/ buttons/button-filled.svelte'
  import ErrorMessage from '../../common/components/form/ErrorMessage.svelte'
  import TextInput from '../../common/components/form/TextInput.svelte'
  import AuthLayout from '../../common/components/layout/AuthLayout.svelte'
  import { mapServerResponseToInterface } from '../../common/utils/mapServerResponseToInterface'

  import type { AuthCredentialsType } from 'src/modules/Login/types/Credentials.type'

  const mobileNumber = field('mobileNumber', '', [required()])
  const password = field('password', '', [required()])
  const loginForm = form(mobileNumber, password)

  const loginUserMobile = useMutation(
    (payload: AuthCredentialsType) => loginUser(payload),
    {
      onSuccess: (data) => {
        const response = mapServerResponseToInterface(data)
        if (response?.statusCode !== 1) {
          // Handle Error
          return
        }

        goto("/home")
      }
    }
  )

  const onSubmit = async () => {
    const payload = {
      countryCode: 'PHL',
      mobile: $mobileNumber.value,
      password: $password?.value
    }

    await loginForm.validate()

    if (!$loginForm.valid) {
      return
    } else {
      $loginUserMobile.mutate(payload)
    }
  }
</script>

<AuthLayout>
  <div class={'h-screen flex justify-center items-center'}>
    <div class="card w-2/5 bg-base-100 border-ink-100 border">
      <div class="card-body">
        <div>
          <TextInput
            name="mobileNumber"
            label="Mobile Number"
            hasError={$loginForm.hasError('mobileNumber.required')}
          >
            <input
              type="tel"
              bind:value={$mobileNumber.value}
              class={`${
                $loginForm.hasError('mobileNumber.required')
                  ? `border-grapefruit-500`
                  : ''
              } input input-bordered border-2 w-full h-[60px] outline-0 focus:outline-0 hover:border-orange-ohmyhome`}
            />
          </TextInput>
          {#if $loginForm.hasError('mobileNumber.required')}
            <ErrorMessage message={'Mobile number is required.'} />
          {/if}
        </div>

        <div>
          <TextInput
            name="password"
            label="Password"
            hasError={$loginForm.hasError('password.required')}
          >
            <input
              type="password"
              bind:value={$password.value}
              class={`${
                $loginForm.hasError('password.required')
                  ? `border-grapefruit-500`
                  : ''
              } input input-bordered border-2 w-full h-[60px] outline-0 focus:outline-0 hover:border-orange-ohmyhome`}
            />
          </TextInput>
          {#if $loginForm.hasError('password.required')}
            <ErrorMessage message={'Password is required.'} />
          {/if}
        </div>

        <div class="pt-4">
          <ButtonFilled
            disabled={$loginUserMobile.isLoading}
            submitting={$loginUserMobile.isLoading}
            type={'submit'}
            label="Login"
            onClick={onSubmit}
          />
        </div>
      </div>
    </div>
  </div>
</AuthLayout>
