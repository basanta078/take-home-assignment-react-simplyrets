import { useEffect } from "react";
import { useQuery } from "react-query";
import { getProperties, PropertyData } from "services/rets";

type PropertiesState = {
    isError: boolean;
    isLoading: boolean;
    data?: PropertyData[];
}
export function useProperties(): PropertiesState{
    const {isError, isLoading, data} = useQuery<PropertyData[]>('properties', getProperties);
    return {
        isError,
        isLoading,
        data,
    }
}