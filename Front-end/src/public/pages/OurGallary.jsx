import React, { useState } from 'react'
import { FaTimes } from 'react-icons/fa';


const images = [
    "/vanutsav/1bb24c80-088a-4656-b0ca-ef774b41b7d7.JPG",
    "/vanutsav/3c829893-7ef9-4db7-9ae1-c8051d5b0b12.jpg",
    "/vanutsav/5a5ce1d8-9716-4fdb-b1d2-f105b78876eb.JPG",
    "/vanutsav/6a75ae8b-4494-4523-8115-0f569576003f.jpg",
    "/vanutsav/7A411C1B-F51B-49F5-94D2-9B20FD999B95.jpg",
    "/vanutsav/7f8ece57-d5d3-4799-8817-4a073714363f.jpg",
    "/vanutsav/08a45a72-0488-47fe-9e35-f909bc32dc03.jpg",
    "/vanutsav/22b18358-fb0b-4026-8d35-26627e3e97f8.jpg",
    "/vanutsav/052a42f7-a2dc-4cec-bdd8-8d1165e7dc45.jpg",
    "/vanutsav/56c0425d-bb5f-43e7-9608-2655ce656f5c.jpg",
    "/vanutsav/56f1b33f-7990-465e-84de-09c72c5dd9c7.jpg",
    "/vanutsav/59faac2b-5cc4-4bdf-9b5e-62c56ead295e.jpg",
    "/vanutsav/80f321d1-ba84-4522-b6e0-ce10c9c62dbe.jpg",
    "/vanutsav/86bae00b-3aae-42b3-ae25-80494523a7ae.jpg",
    "/vanutsav/632dbbbe-4e68-47af-86be-97c0985becc5.jpg",
    "/vanutsav/0823b1c3-62bb-4ef4-9eef-f66f194961c4.jpg",
    "/vanutsav/6661bce2-2bc8-4dc6-81e7-069c50da7c49.jpg",
    "/vanutsav/7718b9ed-1274-49a6-a766-dee5853f5cbb.JPG",
    "/vanutsav/57337557-33f0-4ff8-b2f1-0a0f73146162.jpg",
    "/vanutsav/a7bc8281-ed4e-4dfb-92d6-ecb44aedeb35.JPG",
    "/vanutsav/a9975fac-10d4-4171-9dc5-40013b49db4e.jpg",
    "/vanutsav/b5c89d27-825b-4b90-9c66-628ce71558e9.jpg",
    "/vanutsav/b5441aa2-3ade-4c63-b43e-e840f613c451.jpg",
    "/vanutsav/ee010aa8-f286-4201-a338-d8623cf09e76.jpg",
    "/vanutsav/faae53ef-03fb-4d19-84e3-4586f74a98d8.jpg",
    "/vanutsav/FullSizeRender.jpg",
    "/vanutsav/IMG_3926.jpg",
    "/vanutsav/IMG_5711.PNG",
    "/vanutsav/IMG_5713.PNG",
    "/vanutsav/IMG_5714.PNG",
    "/vanutsav/IMG_5716.PNG",
    "/vanutsav/IMG_7283.JPG",
    "/vanutsav/IMG_5707.PNG",
    "/vanutsav/323942490_5773781922707191_1313707774469881417_n-768x960.jpg",





];

const OurGallary = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    // Function to open the modal with the clicked image
    const openModal = (image) => {
        setSelectedImage(image);
    };

    // Function to close the modal
    const closeModal = () => {
        setSelectedImage(null);
    };
    return <>

        <section className="mt-6 py-20 relative bg-fixed bg-cover" style={{ backgroundImage: `url('/vanutsav/59faac2b-5cc4-4bdf-9b5e-62c56ead295e.jpg')` }}>
            <div className="absolute inset-0 bg-black opacity-30"></div>
            <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white drop-shadow-lg">
                    Our Resort Gallery
                </h1>
            </div>
        </section>

        {/* Gallery Section */}
        <section className="py-12 px-5 lg:px-16 ">
            <div className="columns-2 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="relative mb-4 break-inside overflow-hidden rounded-lg shadow-lg cursor-pointer transition-transform transform hover:scale-105 group"
                        onClick={() => openModal(image)}
                    >
                        <img
                            alt="gallery"
                            className="w-full h-auto object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110"
                            src={image}
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 flex justify-center items-center transition-opacity duration-300">
                            <span className="text-white text-2xl font-bold">View</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal for Image Preview */}
            {selectedImage && (
                <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-80 z-50">
                    <div className="relative max-w-4xl mx-auto">
                        {/* Close Button - Top Left */}
                        {/* <button
                            className=" absolute top-5 left-5 text-white text-4xl hover:text-red-500 transition-all z-60 p-2 bg-black bg-opacity-50 rounded-full"
                            onClick={closeModal}
                        >
                            <FaTimes />
                        </button> */}

                        <button
                            className="absolute top-5 right-5 text-white text-4xl hover:text-red-500 transition-all z-[9999] p-2 bg-black bg-opacity-70 rounded-full"
                            onClick={closeModal}
                        >
                            <FaTimes />
                        </button>


                        {/* Selected Image */}
                        <img
                            src={selectedImage}
                            alt="Selected"
                            className="rounded-lg shadow-2xl max-h-[80vh] transition-transform duration-300 transform hover:scale-105"
                        />
                    </div>
                </div>
            )}
        </section>
    </>
}

export default OurGallary