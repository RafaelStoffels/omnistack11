import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';

import api from '../../services/api';

import './styles.css';

export default function NewIncident() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    const history = useHistory();

    const ongId = localStorage.getItem('ongId');

    async function handleNewIncident(e) {
        e.preventDefault();

        const data = {
            title,
            description,
            value,
        };

        try{
            alert('entrando ' + ongId);

            await api.post('incidents', data, {
                headers: {
                    Authorization: ongId,
                }
            })
            
            history.push('/profile');
        } catch (err) {
            alert('Erro ao cadastrar caso, tente novamente.');
        }
    }

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

            <form onSubmit={handleNewIncident}>
                <input 
                    placeholder="Title"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
                <textarea 
                    placeholder="Description"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                />
                <input 
                    placeholder="Value"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />

                <button className="button" type="submit">Add Case</button>
            </form>
        </div>
    </div>
    )
}