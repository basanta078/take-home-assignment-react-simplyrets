import css from './header.module.scss';

type HeaderProps = {
    title: string;
}

export function Header({title}: HeaderProps): JSX.Element{
    return (
        <div className={css.header} role="heading" aria-level={1}>
            <div className={css.container}>
                {title}
            </div>
        </div>
    )
}