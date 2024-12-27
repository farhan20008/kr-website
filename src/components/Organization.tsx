import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const organizationMembers = [
  { id: '🇺🇸 Kez', name: 'Kevin Jeon', role: 'Team Manager', joinDate: '2019-09-27' },
  { id: '🇺🇸 kaplan', name: 'Adam Kaplan', role: 'Head Coach', joinDate: '2023-04-16' },
  { id: '🇬🇧 GUNTER', name: 'Luke Clives', role: 'Assistant Coach', joinDate: '2024-10-18' },
  { id: '🇺🇸 Rob Moore', name: 'Rob Moore', role: 'CEO', joinDate: '2017-08-10' },
  { id: '🇺🇸 Michael Moore', name: 'Michael Moore', role: 'President of Marketing', joinDate: '2017-08-10' },
  { id: '🇺🇸 Charlie Lipsie', name: 'Charlie Lipsie', role: 'Director of Esports', joinDate: '2017-08-10' },
  { id: '🇺🇸 Eric Ma', name: 'Eric Ma', role: 'Co-President', joinDate: '2017-08-10' },
  { id: '🇺🇸 Zyto', name: 'Bryan Ybanez', role: 'Operations and Team Management', joinDate: '2019-08-01' },
  { id: '🇺🇸 Daph', name: '', role: 'Streamer', joinDate: '2021-08-31' },
  { id: '🇺🇸 tarik', name: 'Tarik Celik', role: 'Streamer', joinDate: '2022-08-30' },
  { id: '🇺🇸 aceu', name: 'Brandon Winn', role: 'Streamer', joinDate: '2022-11-11' },
  { id: '🇺🇸 zombs', name: 'Jared Gitlin', role: 'Co-Owner', joinDate: '2023-10-02' },
];

export function Organization() {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Organization</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Join Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {organizationMembers.map((member) => (
              <TableRow key={member.id}>
                <TableCell>{member.id}</TableCell>
                <TableCell>{member.name}</TableCell>
                <TableCell className="italic">{member.role}</TableCell>
                <TableCell>{member.joinDate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}