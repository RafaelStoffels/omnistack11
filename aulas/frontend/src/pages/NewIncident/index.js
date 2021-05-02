import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';

import './styles.css';

export default function NewIncident() {
    return (
        <div className="new-incident-container">
        <div className="content">
            <section>
                <img src={logoImg} alt="Be the Hero" />

                <h1>Register a new case</h1>
                <p>Describe the case "in details" to find a hero to solve the problem</p>
          
                <Link className="back-link" to="/profile">
                    <FiArrowLeft size={16} color="#E02041" />
                    Come back to the main page
                </Link>
            </section>

            <form>
                <input placeholder="Title" />
                <textarea placeholder="Description" />
                <input placeholder="Value" />

                <button className="button" type="submit">Add Case</button>
            </form>
        </div>
    </div>
    )
}