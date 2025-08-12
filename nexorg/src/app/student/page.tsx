import { OrgCards } from "@/components/orgcards";
import Link from "next/link";

export default function student() {
  return (
    <>
      <div className="bg-muted mt-5 flex-col items-center md:flex-row md:items-start p-8 rounded-lg">
        
        <h1>Welcome to NexOrg</h1>
        <h3>A Software for the Next Generations of University Organizations</h3>
      </div>

      <div className="mt-5 p-8">
        <h1>My Organizations</h1>
      </div>

      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <OrgCards></OrgCards>
      </div>
    
    </>
    
  )
}
