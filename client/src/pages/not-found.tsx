import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useTheme } from "@/hooks/use-theme";

export default function NotFound() {
  const { theme } = useTheme();
  
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background">
      <Card className={`w-full max-w-md mx-4 ${theme === 'dark' ? 'border-glow' : 'bg-white border border-gray-200'}`}>
        <CardContent className="pt-6">
          <div className="flex mb-4 gap-2 items-center">
            <AlertCircle className="h-8 w-8 text-red-500" />
            <h1 className={`text-2xl font-bold ${theme === 'dark' ? 'glow-text' : 'text-gray-900'}`}>404 Page Not Found</h1>
          </div>

          <p className={`mt-4 text-sm ${theme === 'dark' ? 'text-slate-300' : 'text-gray-600'}`}>
            The page you're looking for doesn't exist or has been moved.
          </p>
          
          <div className="mt-6 flex justify-center">
            <Link href="/">
              <Button className={theme === 'dark' ? "crypto-button" : "bg-black text-white hover:bg-gray-800"}>Back to Home</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
