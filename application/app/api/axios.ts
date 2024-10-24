import { SCRAPPE_API_BASE_URL } from "@/lib/constants";
import axios from "axios";

export default axios.create({
  baseURL: SCRAPPE_API_BASE_URL,
});

export const isAxiosError = axios.isAxiosError;
