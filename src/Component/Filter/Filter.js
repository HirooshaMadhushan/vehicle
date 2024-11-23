import React, { useState } from 'react';
import logo1 from '../../Asset/logo3.jpg';

const Filter = () => {
  const [carouselData] = useState([
    {
      id: 1,
      src: logo1,
      alt: 'Slide 1',
      details: 'This is the first slide.',
      category: 'category1',
      date: '2023-04-01',
      price: 99.99,
    },
    {
      id: 2,
      src: '/api/placeholder/800/450',
      alt: 'Slide 2',
      details: 'This is the second slide.',
      category: 'category2',
      date: '2023-04-15',
      price: 79.99,
    },
    {
      id: 3,
      src: '/api/placeholder/800/450',
      alt: 'Slide 3',
      details: 'This is the third slide.',
      category: 'category1',
      date: '2023-05-01',
      price: 89.99,
    },
    {
      id: 4,
      src: '/api/placeholder/800/450',
      alt: 'Slide 4',
      details: 'This is the fourth slide.',
      category: 'category3',
      date: '2023-05-15',
      price: 59.99,
    },
    {
      id: 5,
      src: '/api/placeholder/800/450',
      alt: 'Slide 5',
      details: 'This is the fifth slide.',
      category: 'category2',
      date: '2023-06-01',
      price: 69.99,
    },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [filteredData, setFilteredData] = useState(carouselData);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDate, setSelectedDate] = useState('all');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + filteredData.length) % filteredData.length);
  };

  const getPreviousIndex = () => (currentIndex - 1 + filteredData.length) % filteredData.length;
  const getNextIndex = () => (currentIndex + 1) % filteredData.length;

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
    filterData();
  };

  const handleDateFilter = (date) => {
    setSelectedDate(date);
    filterData();
  };

  const handlePriceFilter = (min, max) => {
    setPriceRange({ min, max });
    filterData();
  };

  const filterData = () => {
    let filtered = carouselData;

    if (selectedCategory !== 'all') {
      filtered = filtered.filter((item) => item.category === selectedCategory);
    }

    if (selectedDate !== 'all') {
      filtered = filtered.filter((item) => item.date === selectedDate);
    }

    filtered = filtered.filter((item) => item.price >= priceRange.min && item.price <= priceRange.max);

    setFilteredData(filtered);
    setCurrentIndex(0);
  };

  return (
    <div className="relative flex items-center justify-center w-full h-screen bg-slate-800">
      <div className="relative w-full max-w-6xl px-16">
        {/* Filters */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <button
              onClick={() => handleCategoryFilter('all')}
              className={`mr-2 px-4 py-2 rounded-md transition-colors ${
                selectedCategory === 'all' ? 'bg-green-400 text-white' : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              All
            </button>
            <button
              onClick={() => handleCategoryFilter('category1')}
              className={`mr-2 px-4 py-2 rounded-md transition-colors ${
                selectedCategory === 'category1' ? 'bg-green-400 text-white' : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              Category 1
            </button>
            <button
              onClick={() => handleCategoryFilter('category2')}
              className={`mr-2 px-4 py-2 rounded-md transition-colors ${
                selectedCategory === 'category2' ? 'bg-green-400 text-white' : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              Category 2
            </button>
            <button
              onClick={() => handleCategoryFilter('category3')}
              className={`mr-2 px-4 py-2 rounded-md transition-colors ${
                selectedCategory === 'category3' ? 'bg-green-400 text-white' : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              Category 3
            </button>
          </div>
          <div>
            <input
              type="date"
              value={selectedDate === 'all' ? '' : selectedDate}
              onChange={(e) => handleDateFilter(e.target.value || 'all')}
              className="px-4 py-2 mr-2 bg-gray-200 rounded-md focus:outline-none"
            />
            <input
              type="number"
              min="0"
              max="1000"
              value={priceRange.min}
              onChange={(e) => handlePriceFilter(parseInt(e.target.value), priceRange.max)}
              className="px-4 py-2 mr-2 bg-gray-200 rounded-md focus:outline-none"
            />
            <input
              type="number"
              min="0"
              max="1000"
              value={priceRange.max}
              onChange={(e) => handlePriceFilter(priceRange.min, parseInt(e.target.value))}
              className="px-4 py-2 mr-2 bg-gray-200 rounded-md focus:outline-none"
            />
          </div>
        </div>

        {/* Previous Preview */}
        <div className="absolute left-0 z-10 w-32 h-24 -translate-y-1/2 opacity-50 top-1/2">
          <img
            src={filteredData[getPreviousIndex()].src}
            alt="Previous slide"
            className="object-cover w-full h-full rounded-lg"
          />
        </div>

        {/* Main Slider */}
        <div className="relative w-full aspect-video">
          {filteredData.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute w-full h-full transition-opacity duration-500 ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={slide.src}
                alt={slide.alt}
                className="object-cover w-full h-full rounded-lg"
              />
              {/* Slide Details */}
              <div className="absolute px-4 py-2 -translate-x-1/2 rounded-md bottom-16 left-1/2 bg-black/50">
                <p className="text-white">{slide.details}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Next Preview */}
        <div className="absolute right-0 z-10 w-32 h-24 -translate-y-1/2 opacity-50 top-1/2">
          <img
            src={filteredData[getNextIndex()].src}
            alt="Next slide"
            className="object-cover w-full h-full rounded-lg"
          />
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute z-20 flex items-center justify-center w-10 h-10 transition-colors -translate-y-1/2 bg-green-400 rounded-full left-4 top-1/2 hover:bg-white/50"
          aria-label="Previous slide"
        >
          <div className="flex items-center justify-center w-6 h-6">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </div>
        </button>

        <button
          onClick={nextSlide}
          className="absolute z-20 flex items-center justify-center w-10 h-10 transition-colors -translate-y-1/2 bg-green-400 rounded-full right-4 top-1/2 hover:bg-white/50"
          aria-label="Next slide"
        >
          <div className="flex items-center justify-center w-6 h-6">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </button>

        {/* Dots Navigation */}
        <div className="absolute flex space-x-2 -translate-x-1/2 bottom-4 left-1/2">
          {filteredData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? 'bg-white' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filter;