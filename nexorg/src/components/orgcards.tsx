import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
} from "@/components/ui/card"
import Image from "next/image";
import Link from "next/link";


const myorgs = [
  {
    title: "PSITES",
    image: "/images/psitecover.jpg",
    description: "CCMS Org",
  },
  {
    title: "Wildcat Esports",
    image: "/images/wildcats.jpg",
    description: "MSEUF Esports Org",
  },
  {
    title: "Pet Society",
    image: "/images/petsociety.png",
    description: "MSEUF Pet Society",
  },
  
];

export const OrgCards = () => {
  return (
    <>
        
            { myorgs.map(( item , index ) => (
                <Link href="/student/organization" key={index}>
                <Card >
                    <div className="relative w-full h-20">
                        <Image src={item.image} fill alt="OrgImage" className="object-cover"></Image>
                    </div>
                <CardHeader>
                    <CardTitle>{item.title}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                    <CardAction>
                    </CardAction>
                </CardHeader>
                
                </Card>
                </Link>
            ))}
        
    </>
  )
}