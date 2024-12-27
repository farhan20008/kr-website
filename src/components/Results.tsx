import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { cn } from '@/lib/utils';

const results = [
  {
    date: 'November 4, 2024 - 06:00',
    tier: 'B-Tier',
    type: 'Offline',
    tournament: 'SEN City Classic 2024',
    score: '0:2',
    opponent: 'NRG',
    result: 'loss'
  },
  {
    date: 'November 4, 2024 - 03:00',
    tier: 'B-Tier',
    type: 'Offline',
    tournament: 'SEN City Classic 2024',
    score: '2:0',
    opponent: 'EG',
    result: 'win'
  },
  {
    date: 'November 3, 2024 - 08:00',
    tier: 'B-Tier',
    type: 'Offline',
    tournament: 'SEN City Classic 2024',
    score: '0:2',
    opponent: 'NRG',
    result: 'loss'
  },
  {
    date: 'September 30, 2024 - 07:40',
    tier: 'Qualifier',
    type: 'Offline',
    tournament: 'Red Bull Home Ground #5: North America Play-in',
    score: '0:2',
    opponent: 'C9',
    result: 'loss'
  },
  {
    date: 'August 23, 2024 - 16:50',
    tier: 'S-Tier',
    type: 'Offline',
    tournament: 'VALORANT Champions 2024',
    score: '1:2',
    opponent: 'TH',
    result: 'loss'
  }
];

export function Results() {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Recent Results</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Tier</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Tournament</TableHead>
              <TableHead>Score</TableHead>
              <TableHead>Opponent</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {results.map((match, index) => (
              <TableRow 
                key={index}
                className={cn(
                  match.result === 'win' && 'bg-green-50 dark:bg-green-950/20',
                  match.result === 'loss' && 'bg-red-50 dark:bg-red-950/20'
                )}
              >
                <TableCell className="whitespace-nowrap">{match.date}</TableCell>
                <TableCell>{match.tier}</TableCell>
                <TableCell>{match.type}</TableCell>
                <TableCell>{match.tournament}</TableCell>
                <TableCell className="font-medium">{match.score}</TableCell>
                <TableCell>{match.opponent}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}