'use client'

import { useState, useEffect } from 'react'

const testimonials = [
  {
    text: "I my 25 years in business, I have never experienced such a great service when dealing with a service provider. It was totally stress and worry free, from the first contact to the finished job, Lacey and Jeremiah were so professional and correct at all times, that I highly recommend their service to anyone reading this note... Jeremiah and Lacey, please never change your approach and attention to details, your formula is just PERFECT!!!",
    author: "Ivan Cajina"
  },
  {
    text: "So here is the thing, I don't often do reviews. But when I do it's because I've run across a truly exceptional company! What can I say about tree shop, easy these are incredible people to do business with! Not only is the job they do phenomenal. The machine which they use to do the land clearing and chipping alone is just amazing! But they are kind, courteous, thorough, prompt and definitely affordable! I just can't say enough nice things about the job this company does and the integrity they bring to the table!",
    author: "SeaQ"
  },
  {
    text: "I don't write reviews often, but felt in this case I absolutely needed to. The Tree Shop is one of the best businesses I have ever dealt with. From the initial call I had with Lacey, I knew I found the perfect company to get the job I wanted done! She was extremely helpful and informative. I will continue to use them to finish out my project and would recommend The Tree Shop to anyone!",
    author: "Lisa Snowden"
  }
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)
    
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/3">
            <h5 className="text-sm font-bold text-blue-400 uppercase mb-4">TESTIMONIALS</h5>
            <h3 className="text-3xl font-bold">We've Got the Tools and Experience to Guarantee Success.</h3>
          </div>
          
          <div className="lg:w-2/3">
            <div className="relative">
              <div className="flex transition-transform duration-500 ease-in-out">
                <div className="w-full flex-shrink-0">
                  <img 
                    src="/images/icons/comma.png" 
                    alt="Quote"
                    width={62}
                    height={51}
                    className="mb-6"
                  />
                  <div className="text-lg leading-relaxed mb-6">
                    {testimonials[currentIndex].text}
                  </div>
                  <div className="font-semibold text-blue-400 uppercase tracking-wide text-sm">
                    {testimonials[currentIndex].author}
                  </div>
                </div>
              </div>
              
              {/* Navigation Dots */}
              <div className="flex space-x-2 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                      index === currentIndex ? 'bg-blue-600' : 'bg-gray-600'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}