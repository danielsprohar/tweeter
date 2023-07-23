import AuthForm from '../components/auth/auth-form'

export default function LoginPage() {
  return (
    <div className="flex flex-col h-screen items-center justify-center w-full">
      <h1 className="text-3xl font-semibold">Sign in</h1>
      <AuthForm />
    </div>
  )
}
