import to from "await-to-js";

const userName = "simplyrets"
const password = "simplyrets"

export async function getProperties(): Promise<Property[]>{
    const [err, response] = await to(fetch("https://api.simplyrets.com/properties", {
        headers:{
            'Authorization': 'Basic ' + btoa(userName + ":" + password)
        }
    }));
    if (err){
        throw err;
    }
    if (response?.status != 200){
        throw new Error(`Query failed with stats: ${response?.status}`)
    }
    const listings = await response.json() as [];
    return listings.map(listing => parseProperty(listing))
}

function parseProperty(listing: any): Property{
    //add aditional validations if necessary
    const {bedrooms, bathsFull, bathsHalf, area} = listing.property;
    const {listPrice, address, listDate, photos} = listing;
    return {
        bedrooms,
        bathsFull,
        bathsHalf,
        area,
        listPrice,
        address,
        listDate,
        photos
    }
}

export type Property = {
    bedrooms: number;
    bathsFull: number;
    bathsHalf: number;
    area: number;
    listPrice: number;
    address: string;
    listDate: Date;
    photos: string[];
}