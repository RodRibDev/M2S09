import { Link, useNavigate } from 'react-router-dom';
import styles from './styles.module.css';
import { useAuth } from '../../contexts/auth';
import { useForm } from 'react-hook-form';

export function LoginPage() {
    const { signIn } = useAuth();
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();

    async function onSubmit(dados) {
        try {
            const success = await signIn(dados);
            if (success) {
                navigate('/dashboard');
            } else {
                alert("Nome de usuário ou senha incorretos.");
            }
        } catch (error) {
            alert("Ocorreu um erro ao tentar fazer login.");
            console.error(error);
        }
    }

    return (
        <main className={styles.container}>
            <div className={styles.formSignin}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <img 
                        className="mb-4" 
                        src="https://lab365-admin.hml.sesisenai.org.br/javax.faces.resource/img/logo-lab.png" 
                        alt="lab 365"  
                        height="57" 
                    />
                    <h1 className="h3 mb-3 fw-normal">Efetuar login</h1>
                    <div className="form-floating">
                        <input 
                            type="text" 
                            className="form-control" 
                            id="floatingInput" 
                            placeholder="Insira seu nome de usuário" 
                            {...register("username", { required: true })}
                        />
                        <label htmlFor="floatingInput">Nome de usuário</label>
                    </div>
                    <div className="form-floating">
                        <input 
                            type="password" 
                            className="form-control" 
                            id="floatingPassword" 
                            placeholder="Password" 
                            {...register("password", { required: true })}
                        />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>

                    <button className="btn btn-primary w-100 py-2" type="submit">Entrar</button>
                    <p className="mt-5 mb-3 text-body-secondary">lab365 &copy; 2024</p>
                    <p>
                        Não possui cadastro? <Link to="/cadastro">Cadastra-se</Link> 
                    </p>
                </form>
            </div>
        </main>
    );
}
