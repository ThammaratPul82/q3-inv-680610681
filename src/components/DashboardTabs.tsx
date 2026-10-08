import { AppWindowIcon,  DockIcon } from "lucide-react"
import { Tabs, TabsList, TabsTrigger,TabsContent} from "@/components/ui/tabs"
import { OverviewCards } from "./OverviewCards"
import { CategoryCards } from "./CategoryCards"

export function DashboardTabs() {
  return (
    <Tabs defaultValue="analytics" className="space-y-4">
      {/* ส่วนปุ่มกดสลับแท็บ */}
      <TabsList>
        <TabsTrigger value="Overview">Overview</TabsTrigger>
        <TabsTrigger value="Category">By Category</TabsTrigger>
      </TabsList>

      <TabsContent value="Overview" className="space-y-4">
        <OverviewCards/>
      </TabsContent>
      
      <TabsContent value="Category" className="space-y-4">
        <CategoryCards />
      </TabsContent>
    </Tabs>
  )
}






      