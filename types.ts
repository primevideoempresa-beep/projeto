
export interface Service {
  name: string;
  description: string;
  url: string;
}

export interface Plan {
  name: string;
  price: number;
  features: string[];
}

export interface About {
  title: string;
  content: string;
}

export interface SiteData {
  site_name: string;
  description: string;
  contact_email: string;
  features: string[];
  plans: Plan[];
  services: Service[];
  about_us: About;
}
