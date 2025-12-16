
export interface Message {
  role: 'user' | 'model';
  text: string;
  image?: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
}
