export default async function generateOTP(): Promise<string> {
 
  const otpCode: string = Math.floor(1000 + Math.random() * 9000).toString();
  
  console.log("Generated OTP:", otpCode); 
  return otpCode;
}
