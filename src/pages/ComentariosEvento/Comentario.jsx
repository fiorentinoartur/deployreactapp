import React, { useEffect, useState } from 'react';
import Container from '../../components/Container/Container';
import MainContent from '../../components/MainContent/MainContent';
import Title from '../../components/Title/Title';
import "./Comentario.css"
import TableCommentary from './TableCommentary/TableCommentary';
import { useParams } from 'react-router-dom';
import api, { commentaryEventResource } from '../../Services/Service';
const Comentario = () => {

    const [comentarios, setComentarios] = useState([]);
    const { idEvento } = useParams();

    useEffect(() => {
        const loadCommentarys = async () => {
            try {
                const promise = await api.get(commentaryEventResource + "/" + idEvento)
                setComentarios(promise.data)
                console.log(promise.data);

            } catch (error) {
                console.log(error);
            }
        }
        loadCommentarys();

    },[])

    return (
        <>
            <MainContent>
                <div className="lista-comentario-section">
                    <Container>
                        <Title
                            titleText={comentarios[0].evento.nomeEvento}
                            color='white'
                        />
                    </Container>
                    <TableCommentary dados={comentarios} />
                </div>

            </MainContent>

        </>
    );
};

export default Comentario;