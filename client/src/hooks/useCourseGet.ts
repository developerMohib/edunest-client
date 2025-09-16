import { api } from "@/utils/axiosInstance";

async function getAllCourse() {
  try {
    const response = await api.get('');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
export default getAllCourse ;