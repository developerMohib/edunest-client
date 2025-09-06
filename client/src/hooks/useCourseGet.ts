import instance from "@/utils/axiosInstance";

async function getAllCourse() {
  try {
    const response = await instance.get('');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
export default getAllCourse ;