import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import styles from './styles.module.css';

export function CadastroPage2() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

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
                    <h1 className="h3 mb-3 fw-normal">Exercício 03 - Validação de formulário</h1>
                    
                    <div className="mb-3">
                        <label htmlFor="nome" className="form-label">Nome</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="nome" 
                            placeholder="Insira seu nome" 
                            {...register("nome", { required: "O nome é obrigatório" })}
                        />
                        {errors.nome && <span className="text-danger">{errors.nome.message}</span>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            id="email" 
                            placeholder="Insira seu email" 
                            {...register("email", { 
                                required: "O email é obrigatório", 
                                pattern: {
                                    value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                                    message: "Formato de email inválido"
                                }
                            })}
                        />
                        {errors.email && <span className="text-danger">{errors.email.message}</span>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="idade" className="form-label">Idade</label>
                        <input 
                            type="number" 
                            className="form-control" 
                            id="idade" 
                            placeholder="Insira sua idade" 
                            {...register("idade", { 
                                required: "A idade é obrigatória",
                                min: {
                                    value: 18,
                                    message: "Você deve ter pelo menos 18 anos para se cadastrar"
                                }
                            })}
                        />
                        {errors.idade && <span className="text-danger">{errors.idade.message}</span>}
                    </div>

                    <button className="btn btn-primary w-100 py-2" type="submit">Cadastrar</button>
                    <p className="mt-5 mb-3 text-body-secondary">lab365 &copy; 2024</p>
                    <p>Já possui cadastro? <Link to={-1}>Efetuar login</Link></p>
                </form>
            </div>
        </main>
    );
}
