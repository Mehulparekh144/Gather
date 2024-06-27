import { LoginSchema } from "@/lib/schemas/loginSchema";
import axios from "axios";
import { toast } from "sonner";
import Cookies from 'js-cookie';

const url = 'http://localhost:8081/auth';
export async function login(data : LoginSchema){
  try{
    const response = await axios.post(url + "/login" , data);
    Cookies.set('token', response.data.token, { expires: 7, path: '/', sameSite: 'Lax' });
    toast.success('Logged in successfully');
  } catch(e){
    toast.error('Invalid credentials');
  }
  
}