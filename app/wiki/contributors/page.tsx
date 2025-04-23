import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

// Sample contributor data - replace with your actual data
const contributors = [
  {
    id: 1,
    nickname: "[S10] IUDEXG",
    contribution:
      "Provided not only a best algorithm but also a source code with visualisation for most effecient mining",
  },
  {
    id: 2,
    nickname: "[S10] Killerrr",
    contribution:
      "Provided maxes mystical power screenshots",
  },
  {
    id: 3,
    nickname: "[S81] gEiStToG",
    contribution:
      "Provided Maxed awakening screenshots",
  },
]


export default function ContributorsPage() {


  return (
    <div className="container py-10 mx-auto">
      <div className="space-y-2 text-center mb-10">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Contributors</h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground">
          We'd like to thank all the amazing people who contributed to this project.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {contributors.map((contributor) => (
          <Card key={contributor.id} className="flex flex-col">
            <CardHeader>
              <CardTitle className="text-xl">{contributor.nickname}</CardTitle>
              <CardDescription>Contributor</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="relative">
                <p className="text-muted-foreground line-clamp-3">{contributor.contribution}</p>
                {contributor.contribution.length > 120 && (
                  <Dialog
                  >
                    <DialogTrigger asChild>
                      <Button variant="link" className="p-0 h-auto text-sm mt-1">
                        Read more
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md overflow-auto max-h-[80vh]">
                      <DialogHeader>
                        <DialogTitle>{contributor.nickname}</DialogTitle>
                        <DialogDescription>Contribution</DialogDescription>
                      </DialogHeader>
                      <div className="space-y-2">
                        <p className="text-muted-foreground">{contributor.contribution}</p>
                      </div>
                    </DialogContent>
                  </Dialog>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
