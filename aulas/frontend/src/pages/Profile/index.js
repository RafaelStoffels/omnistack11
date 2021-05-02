import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function Profile() {
    return(
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be the Hero" />
                <span>Welcome, APAD</span>

                <Link className="button" to="/incidents/new">Register a new case</Link>
                <button type="buttton">
                    <FiPower size="18" color="#E02041" />
                </button>
            </header>

            <h1>Registered Cases</h1>

            <ul>
                <li>
                    <strong>Case:</strong>
                    <p>test case</p>

                    <strong>Description:</strong>
                    <p>$ 120,00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>
                <li>
                    <strong>Case:</strong>
                    <p>test case</p>

                    <strong>Description:</strong>
                    <p>$ 120,00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>
                <li>
                    <strong>Case:</strong>
                    <p>test case</p>

                    <strong>Description:</strong>
                    <p>$ 120,00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>
                <li>
                    <strong>Case:</strong>
                    <p>test case</p>

                    <strong>Description:</strong>
                    <p>$ 120,00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>
            </ul>
        </div>
    );
}