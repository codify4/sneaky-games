import { LoginForm } from "@/components/login-form"
import Image from "next/image"

export default function LoginPage() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <a href="#" className="flex items-center gap-2 self-center font-medium">
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-neon text-primary-foreground">
            <Image src='/logo.png' alt='Sneaky Games Logo' width={60} height={30} />
          </div>
          Sneaky Games
        </a>
        <LoginForm />
      </div>
    </div>
  )
}
