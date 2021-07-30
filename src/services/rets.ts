import to from "await-to-js";

const userName = "simplyrets"
const password = "simplyrets"

export async function getProperties(): Promise<PropertyData[]>{
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

function parseProperty(listing: any): PropertyData{
    //add aditional validations if necessary
    const {bedrooms, bathsFull, bathsHalf, area} = listing.property;
    const {listPrice, address, listDate, photos, mlsId} = listing;
    return {
        bedrooms,
        bathsFull,
        bathsHalf,
        area,
        listPrice,
        address,
        listDate,
        photos,
        mlsId,
    }
}

export type PropertyData = {
    bedrooms: number;
    bathsFull: number;
    bathsHalf: number;
    area: number;
    listPrice: number;
    address: any;
    listDate: Date;
    photos: string[];
    mlsId: number;
}