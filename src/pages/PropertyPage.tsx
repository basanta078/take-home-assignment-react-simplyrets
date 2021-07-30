//import { PropsWithChildren } from 'react';
import { Header } from 'components/header/Header';
import { Property } from 'components/Property/Property';
import { useProperties } from '../hooks/useProperties';
import css from './propertypage.module.scss';

type PropertyPageProps = {

};

export function PropertyPage(props: PropertyPageProps) {
    
    const {data: properties, isError, isLoading} = useProperties();

    if (isLoading){
        return (<div > Loading</div>);
    }

    if (isError){
        return (<div> Error </div>)
    }

    return (
        <>
            <Header
                title="Property Listings"
            />
            <div
                className={css.container}
            >
                <div className={css.row}>
                    {properties?.map(property => 
                        
                            <div className={css.column}>
                                <Property property={property}></Property>
                            </div>
                            
                    )}
                </div>    
            </div>
        </>
    );
}