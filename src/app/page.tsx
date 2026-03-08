import { AppStatus } from '@/types/status';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default async function StatusPage() {
  // Fetching Data from the API
  const responce = await fetch('http://localhost:3000/api/status', {
    cache: 'no-store' // This ensures that we get the latest data every time
  });

  const data: AppStatus = await responce.json();

  return (
    <div className="p=10 flex justify-center">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>System Status: Hired</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-2">
            <div className={`h-3 w-3 rounded-full ${data.online ? 'bg-green-500' : 'bg-red-500'}`} />
            <p>{data.online ? 'System is Online' : 'System is Offline'}</p>
          </div>
          <p className="text-sm text-muted-foreground mt-4">Version: {data.version}</p>
        </CardContent>
      </Card>
    </div>
  )
}