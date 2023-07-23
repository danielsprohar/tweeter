'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { Database } from '../../../../types/supabase'

export default function AuthForm() {
  const supabase = createClientComponentClient<Database>()
  const tweeterBlueHexColor = '#1D9BF0'

  return (
    <Auth
      supabaseClient={supabase}
      view="magic_link"
      appearance={{
        theme: ThemeSupa,
        variables: {
          default: {
            colors: {
              brand: tweeterBlueHexColor,
              defaultButtonBackground: tweeterBlueHexColor,
              defaultButtonText: '#ffffff',
              defaultButtonBackgroundHover: tweeterBlueHexColor,
            },
          },
        },
      }}
      socialLayout={'vertical'}
      showLinks={false}
      providers={[]}
      redirectTo="http://localhost:3000/auth/callback"
    />
  )
}
