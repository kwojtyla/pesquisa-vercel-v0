import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from 'next/image'

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="flex flex-col w-full max-w-md p-8 shadow-md rounded-8">
        <div className="flex justify-center w-full">
          <Image src="/logo-computer.png" alt="Logo do Computer on the Beach" width={168} height={64} />
        </div>
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">Bem-vindo de volta!</CardTitle>
          <p>Entre com suas credenciais</p>
        </CardHeader>
        <CardContent>
          <form>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="seu@email.com" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Senha</Label>
                <Input id="password" type="password" required />
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember">Lembrar login</Label>
              </div>
              <Button type="submit" className="w-full bg-teal-600">
                Entrar
              </Button>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Link href="/forgot-password" className="text-sm underline text-black hover:underline">
            Esqueceu sua senha?
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}

