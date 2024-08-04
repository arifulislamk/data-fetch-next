import Image from "next/image";

const page = () => {
    return (
        <div>
          <h2 className=" text-center text-3xl font-semibold">All Image</h2>  
          <div>
            {
                [1,2,3,4,5].map((image,inx) => ( <Image key={image}  alt={`Food image ${inx}`} src={`/image/${image}.jpg`} width={1080} height={1920}/>))
            }
          </div>
        </div>
    );
};

export default page;