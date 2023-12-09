
import { useForm } from 'react-hook-form';

const ReactHoks = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    return (
        <form className='w-full' onSubmit={handleSubmit((data) => console.log(data))}>
            <input className='border w-full p-2 rounded-xl' {...register('name')} placeholder='Your Name' /> <br /> <br />
            <input className='border w-full p-2 rounded-xl' {...register('email', { required: true })} placeholder='Your Email' /> <br /> <br />
            {errors.lastName && <p>Last name is required.</p>}
            <input className='btn btn-neutral' type="submit" value='Registr' />
        </form>
    );
};

export default ReactHoks;