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

export interface AboutMeCardProps {
    aboutMe: AboutMe
}
export interface JourneyItem {
    title: string;
    description: string;
    date: string;
    subItems?: JourneyItem[];  // Optional sub-items for a nested listing
}

export interface JourneyCardProps {
    careerJourney: JourneyItem[];
    education: JourneyItem[];
}