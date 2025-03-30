import { SignIn } from "@clerk/clerk-react";
import Swal from "sweetalert2";

export const createAlert = (icon, text) => {
  return Swal.fire({
    icon: icon || "info",
    text: text || "Something wrong!",
    timer: 4000,
  });
};

// ฟังก์ชัน Alert และเรียก Clerk Modal
export const createAlert2 = (icon, text) => {
  return Swal.fire({
    icon: icon || "info",
    text: text || "Please Sign in to continue",
    showCloseButton: true,
    showCancelButton: true,
    confirmButtonColor: "#0470EF",
    cancelButtonColor: "#d33",
    confirmButtonText: "Login",
    cancelButtonText: "Cancel",
    allowOutsideClick: false,
    allowEscapeKey: false,
    position: "center",
    customClass: {
      popup: "rounded-lg",
      confirmButton: "bg-[#0470EF] text-white font-semibold py-2 px-4 rounded-lg",
      cancelButton: "bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded-lg",
    },
  }).then((result) => {
    if (result.isConfirmed) {
      document.getElementById("clerk-signin-btn")?.click(); // กดปุ่มซ่อน Clerk Sign In
    }
  });
};

// ปุ่ม Sign In ซ่อนใน DOM (ให้ใส่ไว้ที่ไหนก็ได้ใน App)
const HiddenSignInButton = () => {
  return (
    <SignInButton mode="modal" afterSignInUrl="/service-details">
      <button id="clerk-signin-btn" className="hidden">Sign In</button>
    </SignInButton>
  );
};

export default HiddenSignInButton;
