import { PropertyData } from "services/rets"
import css from './Property.module.scss';

type PropertyProps = {
    property: PropertyData;
}

export function Property({property}: PropertyProps){
    const subHeader = `${property.bedrooms} BR | ${property.bathsFull + 0.5 * property.bathsHalf} Bath | ${property.area} Sq Ft`;
    const dollar = new Intl.NumberFormat(undefined,  {
        style: 'currency',
        currency: 'USD',
      }).format(property.listPrice);
    const address = `${property.address?.crossStreet}, ${property.address?.state}, ${property.address?.country}`
    return (
        <div className={css.property} key={property.mlsId}>
            <img src={property.photos[0]} alt="property"/>
            <span className={css.subHeader}>
                {subHeader}
            </span>
            <span className={css.header}>
                {dollar}
            </span>
            <span className={css.address}>
                {address}
            </span>
            <span className={css.listed}>
                {`Listed: ${property.listDate}`}
            </span>
        </div>
    );
}