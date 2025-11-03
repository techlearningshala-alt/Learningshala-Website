const axios = require("axios");

export const getMentorData = async () => {
  try {
    const res = await axios.get(process.env.NEXT_PUBLIC_BACKEND_URL + "mentors");
    return res;
  } catch (err) {
    console.error("❌ Mentor API error:", err.message);
    // throw new Error("Unable to fetch mentor data");
    return []; // ✅ return fallback instead of throwing
  }
};

export const getMediaData = async () => {
  try {
    const res = await axios.get(process.env.NEXT_PUBLIC_BACKEND_URL + "media-spotlight");
    return res;
  } catch (err) {
    console.error("❌ Media API error:", err.message);
    // throw new Error("Unable to fetch media data");
    return [];
    
  }
};

export const getTestimonialData = async () => {
  try {
    const res = await axios.get(process.env.NEXT_PUBLIC_BACKEND_URL + "student-testimonials");
    return res;
  } catch (err) {
    console.error("❌ Testimonial API error:", err.message);
    // throw new Error("Unable to fetch testimonial data");
    return []; // ✅ return fallback instead of throwing
  }
};

export const getFaqData = async () => {
  try {
    const res = await axios.get(process.env.NEXT_PUBLIC_BACKEND_URL + "faqs/questions");
    return res;
  } catch (err) {
    console.error("❌ Faq API error:", err.message);
    // throw new Error("Unable to fetch faq data");
    return []; 
  }
};