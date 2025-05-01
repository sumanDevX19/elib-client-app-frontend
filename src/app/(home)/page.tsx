import Banner from "@/app/(home)/components/Banner";
import Booklist from "../(home)/components/Booklist";
import { Suspense } from "react";
// import LoaderComponent from "../book/[bookid]/components/LoaderComponent";
// import { SkeletonCard } from "@/components/ui/SkeletonCard";
import Loader from "./components/Loader";





export default async function Home() {

  

  
  



  return (
    <>
    <Banner/>
    <Suspense fallback={<Loader/>}>
      <Booklist/>
    </Suspense>
    
    
    
    </>
  );
}
