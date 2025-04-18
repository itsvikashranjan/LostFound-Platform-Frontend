import React from 'react'
import { motion } from 'framer-motion'

const Card = ({ title, description, image, location, type, date, contact, category }) => {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100"
    >
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover hover:brightness-95 transition-all duration-300"
        />
        <div className="absolute top-2 right-2">
          <span className={`px-3 py-1 text-xs font-semibold rounded-full shadow-sm ${
            type === 'lost' ? 'bg-red-100 text-red-800' : 'bg-emerald-100 text-emerald-800'
          }`}>
            {type}
          </span>
        </div>
      </div>
      
      <div className="p-4 space-y-3">
        <div className="flex items-start justify-between">
          <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">{title}</h3>
          {category && (
            <span className="px-2 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded-full">
              {category}
            </span>
          )}
        </div>
        
        <p className="text-gray-600 text-sm line-clamp-2">{description}</p>
        
        <div className="flex flex-wrap gap-2 text-xs text-gray-500">
          <div className="flex items-center">
            <svg className="h-4 w-4 mr-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="line-clamp-1">{location}</span>
          </div>
          
          {contact && (
            <div className="flex items-center">
              <svg className="h-4 w-4 mr-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="line-clamp-1">{contact}</span>
            </div>
          )}
          
          {date && (
            <div className="flex items-center">
              <svg className="h-4 w-4 mr-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{new Date(date).toLocaleDateString()}</span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default Card