import Banner from "@/app/(home)/components/Banner";
import Booklist from "../(home)/components/Booklist";




export default async function Home() {

  const booksResponse = await fetch(`${process.env.BACKEND_URL}/books/`)
  if(!booksResponse){
    throw new Error('An Error Occurred While Fetching Books')
  }

  const books = await booksResponse.json()

  
  



  return (
    <>
    <Banner/>
    <Booklist books={books}/>
    
    
    
    </>
  );
}
