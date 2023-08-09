export default function BenefitModal(props) {

    console.log(props)
    return (
        <>

            {props.open && (
                <div id="defaultModal" class="flex items-center justify-center bg-black bg-opacity-25 fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                    <div class="relative w-full max-w-2xl max-h-full">

                        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">

                            <div className="grid grid-cols-3 grid-rows-2">
                                <article class="mx-auto max-w-sm shadow-xl bg-cover bg-center min-h-150 transform duration-500 hover:-translate-y-2 cursor-pointer group" style={{ backgroundImage: "url(https://images.pexels.com/photos/3325720/pexels-photo-3325720.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500)" }}>
                                    <div class="bg-black bg-opacity-20 min-h-150 px-10 flex flex-wrap flex-col pt-96 hover:bg-opacity-75 transform duration-300">
                                        <h1 class="text-white text-3xl mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300">
                                            The Illusionist
                                        </h1>
                                        <div class="w-16 h-2 bg-orange-500 rounded-full mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300">
                                        </div>
                                        <p class="opacity-0 text-white text-xl group-hover:opacity-80 transform duration-500">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, beatae!
                                        </p>
                                    </div>
                                </article>
                                <article class="mx-auto max-w-sm shadow-xl bg-cover bg-center min-h-150 transform duration-500 hover:-translate-y-2 cursor-pointer group" style={{ backgroundImage: "url(https://images.pexels.com/photos/3325720/pexels-photo-3325720.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500)" }}>
                                    <div class="bg-black bg-opacity-20 min-h-150 px-10 flex flex-wrap flex-col pt-96 hover:bg-opacity-75 transform duration-300">
                                        <h1 class="text-white text-3xl mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300">
                                            The Illusionist
                                        </h1>
                                        <div class="w-16 h-2 bg-orange-500 rounded-full mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300">
                                        </div>
                                        <p class="opacity-0 text-white text-xl group-hover:opacity-80 transform duration-500">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, beatae!
                                        </p>
                                    </div>
                                </article>
                                <article class="mx-auto max-w-sm shadow-xl bg-cover bg-center min-h-150 transform duration-500 hover:-translate-y-2 cursor-pointer group" style={{ backgroundImage: "url(https://images.pexels.com/photos/3325720/pexels-photo-3325720.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500)" }}>
                                    <div class="bg-black bg-opacity-20 min-h-150 px-10 flex flex-wrap flex-col pt-96 hover:bg-opacity-75 transform duration-300">
                                        <h1 class="text-white text-3xl mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300">
                                            The Illusionist
                                        </h1>
                                        <div class="w-16 h-2 bg-orange-500 rounded-full mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300">
                                        </div>
                                        <p class="opacity-0 text-white text-xl group-hover:opacity-80 transform duration-500">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, beatae!
                                        </p>
                                    </div>
                                </article>
                                <article class="mx-auto max-w-sm shadow-xl bg-cover bg-center min-h-150 transform duration-500 hover:-translate-y-2 cursor-pointer group" style={{ backgroundImage: "url(https://images.pexels.com/photos/3325720/pexels-photo-3325720.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500)" }}>
                                    <div class="bg-black bg-opacity-20 min-h-150 px-10 flex flex-wrap flex-col pt-96 hover:bg-opacity-75 transform duration-300">
                                        <h1 class="text-white text-3xl mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300">
                                            The Illusionist
                                        </h1>
                                        <div class="w-16 h-2 bg-orange-500 rounded-full mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300">
                                        </div>
                                        <p class="opacity-0 text-white text-xl group-hover:opacity-80 transform duration-500">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, beatae!
                                        </p>
                                    </div>
                                </article>
                                <article class="mx-auto max-w-sm shadow-xl bg-cover bg-center min-h-150 transform duration-500 hover:-translate-y-2 cursor-pointer group" style={{ backgroundImage: "url(https://images.pexels.com/photos/3325720/pexels-photo-3325720.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500)" }}>
                                    <div class="bg-black bg-opacity-20 min-h-150 px-10 flex flex-wrap flex-col pt-96 hover:bg-opacity-75 transform duration-300">
                                        <h1 class="text-white text-3xl mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300">
                                            The Illusionist
                                        </h1>
                                        <div class="w-16 h-2 bg-orange-500 rounded-full mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300">
                                        </div>
                                        <p class="opacity-0 text-white text-xl group-hover:opacity-80 transform duration-500">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, beatae!
                                        </p>
                                    </div>
                                </article>
                            </div>

                            <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                                <button onClick={() => props.setOpen(false)} type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </>
    )
}