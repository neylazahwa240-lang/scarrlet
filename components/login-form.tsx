"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import Image from "next/image";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const router = useRouter();

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-pink-100 to-white p-6",
        className
      )}
      {...props}
    >
      {/* Logo Scarlett */}
      <div className="flex flex-col items-center mb-6">
        <Image
          src="/scarlett-logo.png" 
          alt="Scarlett Logo"
          width={80}
          height={80}
          className="rounded-full shadow-md"
        />
        <h1 className="text-2xl font-semibold text-pink-600 mt-3">
          Scarlett Whittening
        </h1>
        <p className="text-sm text-gray-500">
          Glow with confidence 
        </p>
      </div>

      <Card className="w-full max-w-md shadow-lg border-pink-200">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-semibold text-pink-600">
            Welcome Back 
          </CardTitle>
          <CardDescription className="text-gray-500">
            Masuk untuk melanjutkan ke akun Scarlett kamu
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              router.push("/dashboard");
            }}
          >
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email" className="text-pink-600">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="kamu@example.com"
                  className="border-pink-300 focus-visible:ring-pink-400"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password" className="text-pink-600">
                    Password
                  </Label>
                  <a
                    href="#"
                    className="text-sm text-pink-500 hover:underline underline-offset-4"
                  >
                    Lupa password?
                  </a>
                </div>
                <Input
                  id="password"
                  type="password"
                  className="border-pink-300 focus-visible:ring-pink-400"
                  required
                />
              </div>
              <div className="flex flex-col gap-3 mt-2">
                <Button
                  type="submit"
                  className="w-full bg-pink-500 hover:bg-pink-600 text-white"
                >
                  Login
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-pink-300 text-pink-600 hover:bg-pink-50"
                >
                  Login dengan Google
                </Button>
              </div>
            </div>
            <div className="mt-4 text-center text-sm">
              Belum punya akun?{" "}
              <a
                href="#"
                className="text-pink-600 font-semibold hover:underline underline-offset-4"
              >
                Daftar sekarang
              </a>
            </div>
          </form>
        </CardContent>
      </Card>

      <p className="mt-6 text-xs text-gray-400">
        © 2025 Scarlett Beauty. All rights reserved.
      </p>
    </div>
  );
}
