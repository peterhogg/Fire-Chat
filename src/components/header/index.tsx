import React from "react";
import { HeaderItem } from "../../models/HeaderItem";

const Header = (props: any) => {
    const items: HeaderItem[] = props.items;
    const title: string = props.title;

    return (
        <nav>
            <div className="nav-wrapper">
                <a href="#" className="brand-logo">
                    {title}
                </a>
                {items && (
                    <ul id="nav-mobile" className="right">
                        {items.map(({ title, url, id }) => (
                            <li id={id}>
                                <a href={url}>{title}</a>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </nav>
    );
};

export default Header;
