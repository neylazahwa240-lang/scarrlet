import Image from "next/image"
import { LoginForm } from "@/components/login-form"

export default function Page() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm flex flex-col items-center gap-6">
        {/* Logo Scarlet */}
        <Image
          src="/logo/logo.jpg" 
          alt="Scarlet Logo"
          width={100}
          height={100}
          className="rounded-full"
        />
        <h1 className="text-xl font-bold text-pink-600">Scarlet Store</h1>

        {/* Form Login */}
        <div className="w-full">
          <LoginForm />
        </div>
      </div>
    </div>
  )
}
