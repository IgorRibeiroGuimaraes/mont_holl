import Cartao from '../components/Cartao';
import EntradaNumerica from '../components/EntradaNumeroca';
import styles from '../styles/Formulario.module.css';
import Link from 'next/link';
import { useState } from 'react';

export default function Formulario() {
    const [qtdePortas, setQtedPortas] = useState(3);
    const [comPresente, setComPresente] = useState(1);

    return (
        <div className={styles.formulario}>
            <div>
                <Cartao bgcolor="#c0392c">
                    <h1>Monty Hall</h1>
                </Cartao>
                <Cartao>
                    <EntradaNumerica
                        text="Qtde Portas? "
                        value={qtdePortas}
                        onChange={(novaQtde) => setQtedPortas(novaQtde)}
                    />
                </Cartao>
            </div>

            <div>
                <Cartao>
                    <EntradaNumerica
                        text="Porta com presente? "
                        value={comPresente}
                        onChange={(novaPortaComPresente) =>
                            setComPresente(novaPortaComPresente)
                        }
                    />
                </Cartao>

                <Cartao bgcolor="#28a085">
                    <Link href={`/jogo/${qtdePortas}/${comPresente}`} passHref>
                        <h2 className={styles.link}>Iniciar</h2>
                    </Link>
                </Cartao>
            </div>
        </div>
    );
}
