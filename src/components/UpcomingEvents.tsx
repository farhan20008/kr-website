import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
import { Separator } from '@/components/ui/separator';

const upcomingMatches = [
  {
    team1: 'SEN',
    team2: 'GEN',
    event: 'SOOP VALORANT LEAGUE',
    date: '1w 1d',
  },
];

const upcomingTournaments = [
  {
    name: 'UNSTOPPABLE 2024',
    date: 'Nov 28 - Dec 01',
  },
  {
    name: 'SOOP VALORANT LEAGUE',
    date: 'Dec 10 - 15',
  },
  {
    name: 'VCT 2025: Americas Kickoff',
    date: 'Jan 15 - Feb 01',
  },
];

export function UpcomingEvents() {
  return (
    <div className="grid gap-8 mb-8">
      <Card>
        <CardHeader className="bg-red-50 dark:bg-red-950/20">
          <CardTitle className="text-lg">Upcoming Matches</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableBody>
              {upcomingMatches.map((match, index) => (
                <TableRow key={index}>
                  <TableCell className="flex items-center gap-2">
                    <span className="font-semibold">{match.team1}</span>
                    <span className="text-muted-foreground">vs</span>
                    <span className="font-semibold">{match.team2}</span>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="text-sm font-medium">{match.event}</div>
                    <div className="text-sm text-muted-foreground">{match.date}</div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="bg-red-50 dark:bg-red-950/20">
          <CardTitle className="text-lg">Upcoming Tournaments</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {upcomingTournaments.map((tournament, index) => (
              <div key={index}>
                <div className="flex justify-between items-center py-2">
                  <span className="font-medium">{tournament.name}</span>
                  <span className="text-sm text-muted-foreground">{tournament.date}</span>
                </div>
                {index < upcomingTournaments.length - 1 && <Separator />}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}