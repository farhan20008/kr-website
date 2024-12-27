import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TimelineYear } from "./TimelineYear";

const timelineData = {
  "2024": [
    { date: "February 9th", description: "Sentinels benches <b>pANcada</b>, moving Zellsis to the starting roster." },
    { date: "March 7th", description: "Sentinels removes <b>pANcada's</b> buyout, opening him to transfer options and sign curry as a substitute on a short-term contract." }
  ],
  "2023": [
    { date: "January 2nd", description: "sinatraa leaves Streamer position." },
    { date: "January 25th", description: "Danil leaves for G2 Esports." },
    { date: "March 6th", description: "Sick moves to an inactive position." },
    { date: "April 16th", description: "SyykoNT leaves Head Coach position. kaplan changes role from Strategic Coach to Head Coach." }
  ],
  "2022": [
    { date: "September 21st", description: "zekken extends his contract until the end of 2025." },
    { date: "October 8th", description: "Head coach kaplan extends his contract until the end of 2026." },
    { date: "October 11th", description: "reduxx joins as Substitute." }
  ],
  "2021": [
    { date: "March 13th", description: "Marved joins." },
    { date: "May 9th", description: "TenZ moves to the starting roster." },
    { date: "September 8th", description: "TenZ extends his contract by another year." }
  ],
  "2020": [
    { date: "April 27th", description: "TenZ moves to an inactive position." },
    { date: "May 12th", description: "depph leaves." },
    { date: "December 23rd", description: "Marved leaves for NRG." }
  ]
};

export function HistoryTimeline() {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>History</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="2024" className="w-full">
          <TabsList className="grid grid-cols-6 mb-4">
            <TabsTrigger value="2020">2020</TabsTrigger>
            <TabsTrigger value="2021">2021</TabsTrigger>
            <TabsTrigger value="2022">2022</TabsTrigger>
            <TabsTrigger value="2023">2023</TabsTrigger>
            <TabsTrigger value="2024">2024</TabsTrigger>
            <TabsTrigger value="all">Show All</TabsTrigger>
          </TabsList>
          {Object.entries(timelineData).map(([year, events]) => (
            <TabsContent key={year} value={year}>
              <TimelineYear year={year} events={events} />
            </TabsContent>
          ))}
          <TabsContent value="all">
            <div className="space-y-8">
              {Object.entries(timelineData).map(([year, events]) => (
                <div key={year}>
                  <h3 className="text-lg font-semibold mb-4">{year}</h3>
                  <TimelineYear year={year} events={events} />
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}