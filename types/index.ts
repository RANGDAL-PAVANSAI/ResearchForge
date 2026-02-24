// ─── Service ────────────────────────────────────────────────────────────────
export interface Service {
  id: string;
  icon: string;
  title: string;
  shortDesc: string;
  description: string;
  features: string[];
  cta: string;
}

// ─── Process Step ───────────────────────────────────────────────────────────
export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}

// ─── Testimonial ─────────────────────────────────────────────────────────────
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  college: string;
  content: string;
  rating: number;
}

// ─── Contact Form ─────────────────────────────────────────────────────────────
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
}

// ─── API Response ─────────────────────────────────────────────────────────────
export interface ApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
}

// ─── Nav Link ────────────────────────────────────────────────────────────────
export interface NavLink {
  label: string;
  href: string;
}
