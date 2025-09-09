
export const signupUser = async (formData: FormData, userType: "patient" | "doctor") => {
  const apiEndpoint = userType === "doctor"
    ? "http://localhost:5000/api/v1/doctor/createDoctor"
    : "http://localhost:5000/api/v1/patient/createPatient";

  const response = await fetch(apiEndpoint, {
    method: "POST",
    body: formData,
  });

  // Check if the response is successful
  if (!response.ok) {
    // Attempt to parse JSON error message. If it fails, provide a generic error.
    const contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Signup failed. Please try again.");
    } else {
      const errorText = await response.text();
      console.error("Non-JSON server error:", errorText);
      throw new Error(`Server responded with an error: ${response.status} ${response.statusText}`);
    }
  }
  
  // Return the JSON data for a successful response
  return await response.json();
};

export const signinUser = async (credentials: object, userType: "patient" | "doctor") => {
  const apiEndpoint = userType === "doctor"
    ? "http://localhost:5000/api/v1/doctor/loginDoctor"
    : "http://localhost:5000/api/v1/patient/loginPatient";

  const response = await fetch(apiEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    const contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Invalid email or password.");
    } else {
      const errorText = await response.text();
      console.error("Non-JSON server error:", errorText);
      throw new Error(`Server responded with an error: ${response.status} ${response.statusText}`);
    }
  }
  return await response.json();
};

// Forget Password
export const patientForgetPassword = async (email: string) => {
  return await fetch("http://localhost:5000/api/v1/patient/forgetPass", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
  }).then((res) => res.json());
};

// Verify Otp
export const patientVerifyOtp = async (email: string, otp: string) => {
  return await fetch("http://localhost:5000/api/v1/patient/verifyOtp", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, otp }),
  }).then((res) => res.json());
};

// Reset Password
export const patientResetPassword = async (email: string, newPassword: string) => {
  return await fetch("http://localhost:5000/api/v1/patient/resetPassword", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, newPassword }),
  }).then((res) => res.json());
};
