const axios = require("axios");

export const getUniversityData = async () => {
  try {
    const res = await axios.get(
      process.env.NEXT_PUBLIC_BACKEND_URL + "universities/list"
    );
    return res;
  } catch (err) {
    console.error("❌ University API error:", err.message);
    // throw new Error("Unable to fetch mentor data");
    // return []; // ✅ return fallback instead of throwing
  }
};

export const getUniversityDetailData = async ({universitySlug}) => {
  try {
    const res = await axios.get(process.env.NEXT_PUBLIC_BACKEND_URL + "universities/" + universitySlug);
    return res;
  } catch (err) {
    console.error("❌ University API error:", err.message);
    // throw new Error("Unable to fetch mentor data");
    // return []; // ✅ return fallback instead of throwing
  }
};