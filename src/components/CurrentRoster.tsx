import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { PlayerDrawer } from './Players/PlayerDrawer';

const roster = [
  {
    name: 'TenZ',
    fullName: 'Tyson Ngo',
    role: 'Duelist',
    nationality: '🇨🇦 Canada',
    joinDate: '2021-04-12',
    birthDate: 'May 5, 2001',
    age: '22',
    status: 'Active',
    yearsActive: '2019 - Present',
    team: 'Sentinels',
    totalWinnings: '$137,931',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=400&h=400',
    gear: {
      mouse: 'Razer Viper V3 Pro White',
      mousepad: 'Razer Strider',
      mousepadSize: 'Large',
      monitor: 'ZOWIE XL2546',
      refreshRate: '240 Hz',
      keyboard: 'Razer Huntsman V3 Pro Mini',
      headset: 'Razer BlackShark V2 Pro',
      lastUpdated: '2024-04-23 (223 days ago)'
    }
  },
  {
    name: 'zekken',
    fullName: 'Zachary Patrone',
    role: 'Flex',
    nationality: '🇺🇸 United States',
    joinDate: '2023-09-21',
    birthDate: 'March 19, 2005',
    age: '19',
    status: 'Active',
    yearsActive: '2020 - Present',
    team: 'Sentinels',
    totalWinnings: '$137,931',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=400&h=400',
    gear: {
      mouse: 'Razer Viper V3 Pro White',
      mousepad: 'Razer Strider',
      mousepadSize: 'Large',
      monitor: 'ZOWIE XL2546',
      refreshRate: '240 Hz',
      keyboard: 'Razer Huntsman V3 Pro Mini',
      headset: 'Razer BlackShark V2 Pro',
      lastUpdated: '2024-04-23 (223 days ago)'
    }
  },
  {
    name: 'sacy',
    fullName: 'Gustavo Rossi',
    role: 'Initiator',
    nationality: '🇧🇷 Brazil',
    joinDate: '2023-09-21',
    birthDate: 'March 19, 1999',
    age: '24',
    status: 'Active',
    yearsActive: '2020 - Present',
    team: 'Sentinels',
    totalWinnings: '$137,931',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=400&h=400',
    gear: {
      mouse: 'Razer Viper V3 Pro White',
      mousepad: 'Razer Strider',
      mousepadSize: 'Large',
      monitor: 'ZOWIE XL2546',
      refreshRate: '240 Hz',
      keyboard: 'Razer Huntsman V3 Pro Mini',
      headset: 'Razer BlackShark V2 Pro',
      lastUpdated: '2024-04-23 (223 days ago)'
    }
  },
];

export function CurrentRoster() {
  const [selectedPlayer, setSelectedPlayer] = useState<any>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handlePlayerClick = (player: any) => {
    setSelectedPlayer(player);
    setIsDrawerOpen(true);
  };

  return (
    <>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Current Roster</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Nationality</TableHead>
                <TableHead>Join Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {roster.map((player) => (
                <TableRow 
                  key={player.name}
                  className="cursor-pointer hover:bg-muted/50"
                  onClick={() => handlePlayerClick(player)}
                >
                  <TableCell className="font-medium">{player.name}</TableCell>
                  <TableCell>{player.fullName}</TableCell>
                  <TableCell>{player.role}</TableCell>
                  <TableCell>{player.nationality}</TableCell>
                  <TableCell>{player.joinDate}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <PlayerDrawer 
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        player={selectedPlayer}
      />
    </>
  );
}