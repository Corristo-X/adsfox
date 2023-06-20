import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

interface Channel {
    id: number;
    name: string;
    client_count: number;
}

interface ChannelFormProps {
    onSubmit: (newChannel: Channel) => void;
    initialValues?: Channel;
}

const ChannelForm: React.FC<ChannelFormProps> = ({ onSubmit, initialValues }) => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [name, setName] = useState('');
    const [clientCount, setClientCount] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<any>(null);

    useEffect(() => {
        const fetchChannel = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/channels/${id}`);
                const channel: Channel = response.data;
                setName(channel.name);
                setClientCount(channel.client_count.toString());
                setIsLoading(false);
            } catch (err) {
                setError(err);
                setIsLoading(false);
            }
        };

        if (id) {
            fetchChannel();
        }
        else {
            setIsLoading(false);
        }
    }, [id]);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Przygotowanie danych
        const data = {
            name,
            client_count: parseInt(clientCount, 10),
        };

        try {
            if (id) {
                // Edycja istniejącego kanału
                await axios.put(`http://localhost:8000/api/channels/${id}`, data);
            } else {
                // Dodawanie nowego kanału
                const response = await axios.post('http://localhost:8000/api/channels', data);
                const newChannel: Channel = response.data;
                onSubmit(newChannel); // Przekazanie nowego kanału do funkcji onSubmit
            }
            navigate('/channels');
        } catch (error) {
            console.error('Error submitting form: ', error);
            // Obsługa błędu
        }
    };


    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Wystąpił błąd podczas ładowania danych.</div>;
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Nazwa kanału:
                <input
                    type="text"
                    value={name}
                    onChange={event => setName(event.target.value)}
                    required
                />
            </label>
            <label>
                Liczba klientów:
                <input
                    type="number"
                    value={clientCount}
                    onChange={event => setClientCount(event.target.value)}
                    required
                />
            </label>
            <button type="submit">Zapisz</button>
        </form>
    );
};

export default ChannelForm;
