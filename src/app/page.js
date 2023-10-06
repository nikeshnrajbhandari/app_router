// import App from "@/components/carousel"

import create from "@/utils/orm/create"

export default async  function Home() {
  const result = await create()
  console.log(result)
  return (
    <>
    
      <div className='w-full max-w-[1280px] px-5 md:px-10 mx-auto'>
        {/* <App/> */}
        {/* Heading and Paragraph Start */}
        <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
                <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">Its AAVARAN </div>
                <div className="text-md md:text-xl">Covering Stories Uncovering the World</div>
        </div>
        {/* Heading and Paragraph End */}
      </div>
    </>
  )
}
