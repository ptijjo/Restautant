import React from 'react';
import Link from 'next/link';

const Footer = () => {

    const urlFooter = [
        {
            nom: "Proposer un restaurant",
            link: ""
        },
        {
            nom: "Devenir partenaire",
            link: ""
        },
        {
            nom: "Mentions légales",
            link: ""
        },
        {
            nom: "Contact",
            link: ""
        },
    ];


    return (
        <footer className='bg-black text-white w-full flex flex-col justify-center items-center'>
            <h3>ohmyfood</h3>

            <ul>
                {urlFooter.map((link) => {
                    return (
                        <li key={link.nom}>
                            <Link href={link.link}> {link.nom}</Link>
                        </li>
                    )
                })}
            </ul>
        </footer>
    )
}

export default Footer