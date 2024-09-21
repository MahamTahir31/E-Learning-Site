import { useState } from 'react';
import { portfolioItems } from '../../assets/data/sampleData.js';

const itemsPerPage = 8;

const Courses= () => {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(portfolioItems.length / itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = portfolioItems.slice(startIndex, startIndex + itemsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    return (
        <section className='bg-dark-primary py-6 border-t border-b border-dark-secondary' id='projects'>
            <div className='container mx-auto px-6'>
                <h1 className='text-3xl md:text-4xl font-bold text-black text-center mb-8'>Courses We Offer</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                    {currentItems.map((project) => {
                        const { id, title, description, category } = project;
                        return (
                            <div
                                className='bg-pink-500 text-dark-primary rounded-lg overflow-hidden hover:scale-105 transition-all duration-200 ease-in shadow-lg cursor-pointer border'
                                key={id}
                            >
                                
                                <div className='p-8'>
                                    <h2 className='text-xl font-semibold mb-2 text-center'>{title}</h2>
                                    <p className='text-black text-center'>{description}</p>
                                </div>
                                <div className='flex justify-center items-center mb-6 text-dark-secondary'>
                                    {category === 'python' ?
                                        <button
                                            className='px-4 py-2 border-2 border-dark-secondary hover:bg-dark-secondary hover:text-white rounded-lg transition-all duration-200 ease-in font-bold item '
                                            
                                        >
                                            Enroll Now
                                        </button> : <button 
                                            className='px-4 py-2 border-2 border-dark-secondary hover:bg-dark-secondary hover:text-white rounded-lg transition-all duration-200 ease-in flex justify-center items-center font-bold'
                                        >
                                            Enroll Now
                                        </button>}
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className='flex justify-center mt-8'>
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className='px-4 py-2 mx-1 bg-pink-500 text-white rounded-lg disabled:opacity-50'
                    >
                        Previous
                    </button>
                    {[...Array(totalPages)].map((_, index) => (
                        <button
                            key={index + 1}
                            onClick={() => handlePageChange(index + 1)}
                            className={`px-4 py-2 mx-1 rounded-lg ${currentPage === index + 1 ? 'bg-dark-secondary text-white' : 'bg-pink-500 text-white'}`}
                        >
                            {index + 1}
                        </button>
                    ))}
                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className='px-4 py-2 mx-1 bg-pink-500 text-white rounded-lg disabled:opacity-50'
                    >
                        Next
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Courses;