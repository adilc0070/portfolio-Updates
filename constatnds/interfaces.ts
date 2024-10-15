export interface ContentCardProps {
    title: string;
    description: string;
    image?: string;
    address?:{
        contact:AddressContent
    }
}
export interface AddressContent{
    Email:string,
    Phone:string,
    DOB:string,
    Address:string
}