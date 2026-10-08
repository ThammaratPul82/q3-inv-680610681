import { StudentInfo } from "./StudentInfo";
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

export function Footer() {
  return (
    <footer className="w-full">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 lg:py-16">
        <div className="mt-12 border-t pt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
          {/* Changed to flex-row, centered items, and wrapped text wrap settings */}
          <div className="flex flex-row items-center justify-center gap-4 flex-wrap text-center">
            
            <Drawer modal={false} disablePointerDismissal swipeDirection="right">
                <DrawerTrigger >
                <StudentInfo />
                </DrawerTrigger>
                <DrawerContent>
                  <DrawerHeader>
                    <div>
                      <DrawerTitle>ข้อมูลนักศึกษา </DrawerTitle>
                      <DrawerTitle>student information</DrawerTitle>
                    </div>
                    </DrawerHeader>
                    
                  <div className="flex-1 p-4">
                    <div className="rounded-2xl bg-muted group-data-[swipe-axis=x]/drawer-popup:size-full group-data-[swipe-axis=y]/drawer-popup:h-80 group-data-[swipe-axis=y]/drawer-popup:w-full" />
                  </div>
                  <DrawerFooter>
                    <DrawerClose render={<Button />}>Close</DrawerClose>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            
            <span className="text-sm text-muted-foreground whitespace-nowrap">
              &copy; {new Date().getFullYear()} CPE207 Corp. All rights
              reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}



