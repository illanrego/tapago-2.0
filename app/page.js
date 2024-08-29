import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import PegadorDeDia from "@/components/ui/daypicker";

export default function Home() {
  return (
    <main>
      <Card>
        <CardHeader>
          <CardTitle>Tá Pago?</CardTitle>
          <CardDescription>Um monitor fitness para devs preguiçosos</CardDescription>
        </CardHeader>
        <CardContent>

        <PegadorDeDia />
          
        </CardContent>
      </Card>
   </main>
  )
}