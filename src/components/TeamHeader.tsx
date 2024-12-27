import { Trophy } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export function TeamHeader() {
  return (
    <Card className="mb-8">
      <CardContent className="p-6">
        <div className="flex items-center gap-6">
          <img 
            src="https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=200&h=200" 
            alt="KingsRock Logo" 
            className="w-32 h-32 rounded-lg object-cover"
          />
          <div>
            <h1 className="text-4xl font-bold mb-2">KingsRock</h1>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Trophy className="w-4 h-4" />
              <span>Bangladeshi Esports Organization</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}