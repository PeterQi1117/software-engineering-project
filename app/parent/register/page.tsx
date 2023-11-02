
'use client'

import { useState } from "react";
import { myAction } from "./actions";

export default function RegisterUser() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");

    return (
        <form onSubmit={(event) => {
            event.preventDefault(); // prevent the default form submission behavior
            myAction(firstName, lastName, email); // call myAction with the form data
        }}>
            <label>
                First Name:
                <input
                    type="text"
                    value={firstName}
                    onChange={(event) => setFirstName(event.target.value)}
                />
            </label>
            <label>
                Last Name:
                <input
                    type="text"
                    value={lastName}
                    onChange={(event) => setLastName(event.target.value)}
                />
            </label>
            <label>
                Email:
                <input
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
            </label>
            <button type="submit">Register</button>
        </form>
    );
}
