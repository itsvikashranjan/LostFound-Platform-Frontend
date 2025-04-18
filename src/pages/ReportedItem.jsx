import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card";
import { API_BASE_URL } from '../config';

const ReportedItem = () => {
  const [fdata, setFdata] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);

  const fetch = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`${API_BASE_URL}/reports`);
      setFdata(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">
            All Reported Items
          </h1>
          <p className="text-gray-600">
            Browse through all the reported lost and found items in your community
          </p>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {fdata.map((data) => (
              <Card
                key={data.id}
                title={data.title}
                description={data.description}
                image={data.image_url}
                location={data.location}
                type={data.type || 'found'}
                date={data.created_at}
                contact={data.contact}
                category={data.category}
              />
            ))}
          </div>
        )}

        {/* Image Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 flex items-center justify-center z-50"
            onClick={() => setSelectedImage(null)}
          >
            <div className="max-w-4xl w-full p-4 bg-white border-2">
              <img
                src={selectedImage}
                alt="Enlarged view"
                className="w-full h-auto max-h-[80vh] object-contain"
              />
            </div>
          </div>
        )}

        <div className="mt-8 text-center">
          <button
            onClick={fetch}
            className="px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors"
          >
            Refresh Data
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReportedItem;
