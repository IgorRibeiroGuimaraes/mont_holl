import { useState, useEffect } from 'react';
import Porta from '../../../components/Porta';
import { atualizarPortas, criarPortas } from '../../../functions/porta';
import styles from '../../../styles/jogo.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Jogo() {
    const router = useRouter();
    const [valido, setValido] = useState(false);
    const [portas, setPortas] = useState([]);

    useEffect(() => {
        const portas = +router.query.portas;
        const temPresente = +router.query.temPresente;

        const qtdePortasValidas = portas >= 3 && portas <= 100
        const temPresenteValido = temPresente >= 1 && temPresente <=portas

        setValido(qtdePortasValidas && temPresenteValido)
    }, [portas, router.query.portas, router.query.temPresente]);

    useEffect(() => {
        const portas = +router.query.portas;
        const temPresente = +router.query.temPresente;
        setPortas(criarPortas(portas, temPresente));
    }, [router?.query]);

    function renderizarPorta() {
        return portas.map((porta) => {
            return (
                <Porta
                    key={porta.numero}
                    value={porta}
                    onChange={(novaPorta) =>
                        setPortas(atualizarPortas(portas, novaPorta))
                    }
                />
            );
        });
    }
    return (
        <div id={styles.jogo}>
            <div className={styles.portas}>{valido ? renderizarPorta(): 
            <h1> Valores invalidos!!!</h1>
            }</div>
            <div className={styles.botoes}>
                <Link href="/" passHref>
                    <button style={{cursor:"pointer"}}>Reiniciar o Jogo</button>
                </Link>
            </div>
        </div>
    );
}
