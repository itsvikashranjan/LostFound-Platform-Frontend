// import React from "react";
// import axios from 'axios'
// const Login = () => {
//   const [text, settext]=useState("")
//   const [password, setPassword]=useState("1234")
//   const [email, setEmail]=useState("ab@ab.ab")
//   const [email, setEmail]=useState("ab@ab.ab")



//   const SubmitHandler= async(e)=>{
//     e.preventDefault()
//     const response = await axios.post("http://localhost:3000/login",{email,password})
//     console.log(response.data)
//   }
//   return (
//     <>
//     <form onSubmit={SubmitHandler}>
//       <input type="text" value={text}  onChange={(e)=>settext(e.target.value)} placeholder='Title' />
//       <br />
//       <label for="avatar">Upload a picture:</label>
//       <br />
//       <input
//         type="file"
//         id="avatar"
//         name="avatar"
//         accept="image/png, image/jpeg"
//       /> <br />
//       <input type="text" placeholder="Description" />
//       <br />
//       <input type="text" placeholder="Location" />
//       </form>
//     </>
//   );
// }

// export default Report;
import React, { useState } from "react";
import { motion } from "framer-motion";
import { API_BASE_URL } from '../config';

function Report() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    contact: "",
    image: null
  });
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "image" && files && files[0]) {
      const file = files[0];
      setFormData((prev) => ({
        ...prev,
        [name]: file
      }));
      // Create preview URL
      const fileUrl = URL.createObjectURL(file);
      setPreviewUrl(fileUrl);
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const data = new FormData();
    data.append("title", formData.title);
    data.append("description", formData.description);
    data.append("location", formData.location);
    data.append("contact", formData.contact);
    data.append("image", formData.image);
  
    try {
      const response = await fetch(`${API_BASE_URL}/report`, {
        method: "POST",
        body: data
      });
  
      if (response.ok) {
        alert("Submitted successfully!");
        setFormData({
          title: "",
          description: "",
          location: "",
          contact: "",
          image: "null"
        });
        setPreviewUrl("null");
      } else {
        alert("Failed to submit.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-emerald-50 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Report Lost or Found Item
          </h2>
          <p className="mt-3 text-lg text-gray-600">
            Help others find their lost items or report found items
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white/80 backdrop-blur-sm shadow-xl sm:rounded-2xl border border-white/20"
        >
          <form onSubmit={handleSubmit} className="space-y-5 p-5">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="space-y-1"
            >
              <label htmlFor="title" className="text-sm font-medium text-gray-700">
                Title
              </label>
              <input
                type="text"
                name="title"
                id="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full px-3 py-2 text-sm border border-gray-200 rounded-md focus:ring-1 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                placeholder="Enter a descriptive title"
                required
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="space-y-1"
            >
              <label htmlFor="description" className="text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                rows={3}
                value={formData.description}
                onChange={handleChange}
                className="w-full px-3 py-2 text-sm border border-gray-200 rounded-md focus:ring-1 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                placeholder="Provide detailed description of the item"
                required
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="space-y-1"
            >
              <label htmlFor="location" className="text-sm font-medium text-gray-700">
                Location
              </label>
              <input
                type="text"
                name="location"
                id="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full px-3 py-2 text-sm border border-gray-200 rounded-md focus:ring-1 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                placeholder="Where was the item found/lost?"
                required
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.85 }}
              className="space-y-1"
            >
              <label htmlFor="contact" className="text-sm font-medium text-gray-700">
                Contact Number
              </label>
              <input
                type="number"
                name="contact"
                id="contact"
                value={formData.contact}
                onChange={handleChange}
                className="w-full px-3 py-2 text-sm border border-gray-200 rounded-md focus:ring-1 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                placeholder="Enter your contact number"
                required
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="space-y-1"
            >
              <label className="text-sm font-medium text-gray-700">
                Upload Image
              </label>
              <div className="flex justify-center px-4 py-3 border border-gray-200 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  {previewUrl ? (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img
                        src={previewUrl}
                        alt="Preview"
                        className="mx-auto h-20 w-20 object-cover rounded-md"
                      />
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="button"
                        onClick={() => {
                          setPreviewUrl(null);
                          setFormData(prev => ({ ...prev, image: null }));
                        }}
                        className="text-xs text-red-600 hover:text-red-500 transition-colors duration-200"
                      >
                        Remove image
                      </motion.button>
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <svg
                        className="mx-auto h-7 w-7 text-gray-400"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="flex text-xs text-gray-600">
                        <label
                          htmlFor="image-upload"
                          className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-1 focus-within:ring-offset-1 focus-within:ring-indigo-500"
                        >
                          <span>Upload a file</span>
                          <input
                            id="image-upload"
                            name="image"
                            type="file"
                            className="sr-only"
                            accept="image/png, image/jpeg"
                            onChange={handleChange}
                            required
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">PNG, JPG up to 10MB</p>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="pt-2"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-indigo-500 transition-all duration-200"
              >
                Submit Report
              </motion.button>
            </motion.div>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Report;

