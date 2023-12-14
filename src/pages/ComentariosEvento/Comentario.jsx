import React, { useEffect, useState } from 'react';
import Container from '../../components/Container/Container';
import MainContent from '../../components/MainContent/MainContent';
import Title from '../../components/Title/Title';
import "./Comentario.css"
import TableCommentary from './TableCommentary/TableCommentary';
import { useParams } from 'react-router-dom';
import api, {commentaryEventResource} from '../../Services/Service';
const Comentario = () => {

    const [comentarios, setComentarios] = useState([]);
    const {idEvento} = useParams();

useEffect(() => {
    const loadCommentarys = async () => {
        try {
            const promise = await api.get(commentaryEventResource+"/"+idEvento)
            setComentarios(promise.data[0])
            
        } catch (error) {
            console.log(error);
        }
    }
    loadCommentarys();

})

    return (
        <>
            <Container>
                <MainContent>
                    <>
                        <h1> {comentarios.descricao}</h1>
                        <section className="lista-comentario-section">
                            <Title />
                                <TableCommentary
                                    dados={comentarios}

                                />
                        </section>
                   

                    </>

                </MainContent>

            </Container>


        </>
    );
};

export default Comentario;