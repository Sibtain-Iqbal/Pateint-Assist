

export const signupUser = async (formData: FormData, userType: "patient" | "doctor") => {
  const apiEndpoint = userType === "doctor"
    ? "http://localhost:5000/api/v1/doctor/createDoctor"
    : "http://localhost:5000/api/v1/patient/createPatient";

  const response = await fetch(apiEndpoint, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
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

export const HandleGoogleLogin = async (credential: string, userType: "patient" | "doctor") => {
  const apiEndpoint = userType === "patient"
    ? "http://localhost:5000/api/v1/patient/googleLoginPatient"
    : "http://localhost:5000/api/v1/doctor/googleLoginDoctor"; 

  const response = await fetch(apiEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ credential })
  });

  if (!response.ok) {
    const contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Google login failed.");
    } else {
      const errorText = await response.text();
      console.error("Non-JSON server error:", errorText);
      throw new Error(`Server responded with an error: ${response.status} ${response.statusText}`);
    }
  }
  
  return await response.json();
};