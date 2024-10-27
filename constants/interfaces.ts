export interface ContentCardProps {
    title: string;
    description: string;
    image?: string;
    address?: {
        contact: AddressContent
    }
}
export interface AddressContent {
    Email: string,
    Phone: string,
    DOB: string,
    Address: string
}
export interface Blog {
    id: number;
    title: string;
    link: string;
    image: string;
    description: string;
}

export interface LastUploadedBlogProps {
    blogs: Blog[];
}

// interfaces.ts
export interface Project {
    title: string;
    description: string;
    image: string;
    link: string;
}

export interface LatestProjectsProps {
    projects: Project[];
}

export type AboutMe = string[]