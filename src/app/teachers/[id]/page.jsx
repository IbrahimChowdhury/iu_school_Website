import React from 'react'

const getSingleTeacher = async (id) => {
    try {
        const response = await fetch(`${process.env.url}/api/teacher/${id}`, {
            cache: "no-cache",
        });
        if (!response.ok) {
            throw new Error("failed to fetch noticeSections data")
        }
        return response.json()
    } catch (error) {
        console.log(error)
    }
}

const TeachersData = async ({ params }) => {
    const { id } = params
    const data = await getSingleTeacher(id)

    if (!data) {
        return (
            <div>
                <div>
                    <div>
                        <div className='w-screen h-screen flex justify-center items-center'>
                            <div className="flex w-full max-w-md mx-auto overflow-hidden bg-white rounded-lg shadow-lg animate-pulse dark:bg-gray-800">
                                <div className="w-1/3 bg-gray-300 dark:bg-gray-600"></div>

                                <div className="w-2/3 p-4 md:p-4">
                                    <h1 className="w-40 h-2 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>

                                    <p className="w-48 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>

                                    <div className="flex mt-4 item-center gap-x-2">
                                        <p className="w-5 h-2 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                                        <p className="w-5 h-2 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                                        <p className="w-5 h-2 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                                        <p className="w-5 h-2 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                                        <p className="w-5 h-2 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                                    </div>

                                    <div className="flex justify-between mt-6 item-center">
                                        <h1 className="w-10 h-2 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>

                                        <div className="h-4 bg-gray-200 rounded-lg w-28 dark:bg-gray-700"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    if (data) {

        return (


            <div className='my-14 flex justify-center items-center'>
             <div  className=' container flex  flex-col  lg:flex-row-reverse lg:justify-between lg:items-center'>

<div className='relative h-80 flex justify-center lg:w-1/2'>
    <Image height={400} width={400} className='absolute object-contain  rounded-xl' src={`${data?.imageLinks[0]}`} alt="" />
</div>

<div className='flex flex-col justify-center mt-3 lg:ml-36 lg:w-96 '>
<h1 className=' text-3xl lg:text-4xl font-semibold'>{data?.name}</h1>
<h1 className='text-xl font-light' >{data?.title}</h1>
<div className='break-all text-justify mt-7	' dangerouslySetInnerHTML={{__html:`${data?.body}`}}>

</div>
</div>

</div>
            </div>



        )
    }
}

export default TeachersData;


